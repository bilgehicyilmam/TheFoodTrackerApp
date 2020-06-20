package com.hicyilmam.food_tracker_api.repositories;

import com.hicyilmam.food_tracker_api.models.User;
import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, Integer> {
    Optional<User> findByEmailAndPassword(final String email, final String password);
    boolean existsByEmail(final String email);
}
