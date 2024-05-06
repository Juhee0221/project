package com.example.foodProgram.controller;

import com.example.foodProgram.VO.MemberVO;
import com.example.foodProgram.service.MemberService;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/member")
public class MemberController {
    @Resource(name = "memberService")
    private MemberService memberService;

    //회원가입
    @PostMapping("/memberJoin")
    public void memberJoin(@RequestBody MemberVO memberVO){
        System.out.println(memberVO);
        memberService.joinMember(memberVO);
    }
}
