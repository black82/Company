package company.db.startime.controler;

import company.db.startime.model.AuthBody;
import company.db.startime.model.Users;
import company.db.startime.repository.UserRepository;
import company.db.startime.security.CustomUserDetailsService;
import company.db.startime.security.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

import static org.springframework.http.ResponseEntity.ok;

@CrossOrigin ( origins = "*" )
@RestController
@RequestMapping ( "/api/auth" )
public class AuthController {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    JwtTokenProvider jwtTokenProvider;

    @Autowired
    UserRepository users;

    @Autowired
    private CustomUserDetailsService userService;

    @SuppressWarnings ( "rawtypes" )
    @PostMapping ( "/login" )
    public ResponseEntity login(@RequestBody AuthBody data) {
        try {
            String username = data.getEmail ();
            authenticationManager.authenticate (new UsernamePasswordAuthenticationToken (username, data.getPassword ()));
            String token = jwtTokenProvider.createToken (username, this.users.findByEmail (username).getRoles_users ());
            Map<Object, Object> model = new HashMap<> ();
            model.put ("username", username);
            model.put ("token", token);
            return ok (model);
        } catch (AuthenticationException e) {
            throw new BadCredentialsException ("Invalid email/password supplied");
        }
    }

    @SuppressWarnings ( "rawtypes" )
    @PostMapping ( "/register" )
    public ResponseEntity register(@RequestBody Users users) {
        Users usersExists = userService.findUserByEmail (users.getEmail ());
        if (usersExists != null) {
            throw new BadCredentialsException ("Users with username: " + users.getEmail () + " already exists");
        }
        userService.saveUser (users);
        Map<Object, Object> model = new HashMap<> ();
        model.put ("message", "Users registered successfully");
        return ok (model);
    }
}