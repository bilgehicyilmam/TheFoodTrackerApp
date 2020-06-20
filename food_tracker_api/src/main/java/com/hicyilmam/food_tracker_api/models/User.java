package com.hicyilmam.food_tracker_api.models;

import java.math.BigDecimal;
import java.util.List;
import javax.persistence.Id;
import lombok.Data;

@Data
public class User {
    @Id
    public String id;
    private String name;
    private String email;
    private String password;
    private String thumb;
    private String address;
    private BigDecimal latitude;
    private BigDecimal longitude;
    private String phoneNumber;
    private String website;
    private String details;
    private boolean restaurant;
    private List<String> tags;
}
