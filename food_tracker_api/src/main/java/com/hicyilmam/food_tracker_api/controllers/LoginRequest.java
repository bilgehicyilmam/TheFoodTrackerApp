package com.hicyilmam.food_tracker_api.controllers;

import lombok.Data;

@Data
public class LoginRequest {
    private String email;
    private String password;
}
