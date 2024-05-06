package com.example.foodProgram.member.service;

import com.example.foodProgram.member.VO.MemberVO;

public interface MemberService {
    void joinMember(MemberVO memberVO);

    MemberVO memberLogin(MemberVO memberVO);
}
