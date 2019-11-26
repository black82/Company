package company.db.startime.controler;

import company.db.startime.model.AuthBody;
import company.db.startime.model.Users;
import company.db.startime.repository.UserRepository;
import company.db.startime.security.CustomUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin ( origins = "*" )
@RestController
@RequestMapping ( "/api/auth" )
public class AuthController {

    @Autowired
    UserRepository users;

    @Autowired
    private CustomUserDetailsService userService;

    @SuppressWarnings ( "rawtypes" )
    @PostMapping ( "/login" )
    public ResponseEntity login(@RequestBody AuthBody data) {
        return ResponseEntity.ok ().body (userService.login (data));
    }

    @SuppressWarnings ( "rawtypes" )
    @PostMapping ( "/register" )
    public ResponseEntity register(@RequestBody Users users) {
        return ResponseEntity.ok ().body (userService.register (users));
    }
}