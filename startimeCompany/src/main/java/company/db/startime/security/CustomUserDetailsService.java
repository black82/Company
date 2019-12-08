package company.db.startime.security;


import company.db.startime.model.AuthBody;
import company.db.startime.model.Role;
import company.db.startime.model.Users;
import company.db.startime.repository.RoleRepository;
import company.db.startime.repository.UserRepository;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class CustomUserDetailsService implements UserDetailsService {
    private static final Logger LOGGER = LogManager.getLogger (CustomUserDetailsService.class.getName ());

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    JwtTokenProvider jwtTokenProvider;
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder bCryptPasswordEncoder;

    public Users findUserByEmail(String email) {
        return userRepository.findByEmail (email);
    }

    public Map<Object, Object> login(AuthBody data) {
        try {
            String username = data.getEmail ();
            authenticationManager.authenticate (new UsernamePasswordAuthenticationToken (username, data.getPassword ()));
            String token = jwtTokenProvider.createToken (username, this.userRepository
                    .findByEmail (username)
                    .getRoles_users ());
            Map<Object, Object> model = new HashMap<> ();
            model.put ("username", username);
            model.put ("token", token);
            LOGGER.info ("Login user name =" + data.getEmail ());
            return model;
        } catch (AuthenticationException e) {
            throw new BadCredentialsException ("Invalid email/password supplied");
        }
    }

    public Map<Object, Object> register(Users users) {
        Users usersExists = findUserByEmail (users.getEmail ());
        if (usersExists != null) {
            throw new BadCredentialsException ("Users with username: " + users.getEmail () + " already exists");
        }
        saveUser (users);
        Map<Object, Object> model = new HashMap<> ();
        model.put ("message", "Users registered successfully");
        LOGGER.info ("Register user name =" + users.getFullname () + "User email = " + users.getEmail ());
        return model;
    }

    public void saveUser(Users users) {
        users.setPassword (bCryptPasswordEncoder.encode (users.getPassword ()));
        users.setEnabled (true);
        Role userRole = roleRepository.findByRoleUser ("ADMIN");
        users.setRoles_users (new HashSet<> (Arrays.asList (userRole)));
        userRepository.save (users);
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

        Users users = userRepository.findByEmail (email);
        if (users != null) {
            List<GrantedAuthority> authorities = getUserAuthority (users.getRoles_users ());
            return buildUserForAuthentication (users, authorities);
        }
        else {
            throw new UsernameNotFoundException ("username not found");
        }
    }

    private List<GrantedAuthority> getUserAuthority(Set<Role> userRoles) {
        Set<GrantedAuthority> roles = new HashSet<> ();
        userRoles.forEach ((role) -> {
            roles.add (new SimpleGrantedAuthority (role.getRoleUser ()));
        });

        return new ArrayList<> (roles);
    }

    private UserDetails buildUserForAuthentication(Users users,
            List<GrantedAuthority> authorities) {
        return new org.springframework.security.core.userdetails.User (users.getEmail (), users.getPassword (), authorities);
    }
}
