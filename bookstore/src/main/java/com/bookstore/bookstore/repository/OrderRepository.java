package com.bookstore.bookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bookstore.bookstore.model.Order;

public interface OrderRepository extends JpaRepository<Order,Long> {
}