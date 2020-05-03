package com.hicyilmam.food_tracker_api.repositories;

import com.hicyilmam.food_tracker_api.models.User;
import java.util.List;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "users", path = "users")
public interface UserRepository extends PagingAndSortingRepository<User, Long> {
    List<User> findByLastName(String lastName);


}
