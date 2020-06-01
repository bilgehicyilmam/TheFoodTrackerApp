package com.hicyilmam.food_tracker_api.config;

import com.hicyilmam.food_tracker_api.repositories.GenericToStringSerializer;
import com.hicyilmam.food_tracker_api.repositories.JedisConnectionFactory;
import com.hicyilmam.food_tracker_api.repositories.RedisTemplate;
import org.springframework.context.annotation.Bean;

public class RedisConfig {

    @Bean
    JedisConnectionFactory jedisConnectionFactory() {
        return new JedisConnectionFactory();
    }

    @Bean
    public RedisTemplate<String, Object> redisTemplate() {
        final RedisTemplate<String, Object> template = new RedisTemplate<String, Object>();
        template.setConnectionFactory(new JedisConnectionFactory());
        template.setValueSerializer(new GenericToStringSerializer<Object>(Object.class));
        return template;
    }
}
