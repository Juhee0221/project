package com.example.foodProgram.service;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("foodService")
public class FoodServiceImpl {
    @Autowired
    private SqlSession sqlSession;
}
