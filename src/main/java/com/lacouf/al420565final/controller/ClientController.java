package com.lacouf.al420565final.controller;

import com.lacouf.al420565final.util.ClientFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.stream.Collectors;

@RestController
@CrossOrigin
@RequestMapping("/client")
public class ClientController {

    @GetMapping("/all")
    ResponseEntity<?> getAllClients() {
        return ResponseEntity.ok(
                ClientFactory.getClients()
        );
    }

    @GetMapping("/all_men")
    ResponseEntity<?> getAllMen() {
        return ResponseEntity.ok(
                ClientFactory.getClients().stream().filter(client ->
                        client.getGender().contains("M")).collect(Collectors.toList()));
    }

    @GetMapping("/all_ontarians")
    ResponseEntity<?> getAllOntarians() {
        return ResponseEntity.ok(
                ClientFactory.getClients().stream().filter(client ->
                        client.getProvince().contains("ON")).collect(Collectors.toList()));
    }
}
