package com.hicyilmam.food_tracker_api.repositories;

public class RedisTemplate<T, T1> {
    private JedisConnectionFactory jedisConnectionFactory;
    private T1 objectGenericToStringSerializer;

    public void setConnectionFactory(final JedisConnectionFactory jedisConnectionFactory) {
        this.jedisConnectionFactory = jedisConnectionFactory;
    }

    public void setValueSerializer(final T1 objectGenericToStringSerializer) {
        this.objectGenericToStringSerializer = objectGenericToStringSerializer;
    }
}
