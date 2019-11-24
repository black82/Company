package company.db.startime.security;

import company.db.startime.model.Role;
import company.db.startime.model.Users;
import company.db.startime.repository.RoleRepository;
import company.db.startime.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
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

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder bCryptPasswordEncoder;

    public Users findUserByEmail(String email) {
        return userRepository.findByEmail (email);
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
