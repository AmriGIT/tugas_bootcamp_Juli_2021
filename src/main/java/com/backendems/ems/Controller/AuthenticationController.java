package com.backendems.ems.Controller;

import com.backendems.ems.conifgsecurity.CustomUserDetailsService;
import com.backendems.ems.conifgsecurity.JwtUtil;
import com.backendems.ems.model.AuthenticationRequest;
import com.backendems.ems.model.AuthenticationResponse;
import com.backendems.ems.model.DAOUser;
import com.backendems.ems.model.UserDTO;
import com.backendems.ems.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin("*")
@RestController
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private CustomUserDetailsService userDetailsService;

    @Autowired
    private UserRepository userrespository;
    
    @Autowired
    private JwtUtil jwtUtil;

    @RequestMapping(value = "/api/authenticate", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest)
            throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                    authenticationRequest.getUsername(), authenticationRequest.getPassword()));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }

        UserDetails userdetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
        String token = jwtUtil.generateToken(userdetails);
        DAOUser user = new DAOUser();
        user = userrespository.findByUsername(userdetails.getUsername());
        return ResponseEntity.ok().body(new AuthenticationResponse(token));
    }

    @RequestMapping(value = "/api/register", method = RequestMethod.POST)
    public ResponseEntity<?> saveUser(@RequestBody UserDTO user) throws Exception {
        return ResponseEntity.ok(userDetailsService.save(user));
    }
}
