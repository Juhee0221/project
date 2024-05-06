package com.example.foodProgram.member.controller;

import com.example.foodProgram.member.VO.MemberVO;
import com.example.foodProgram.member.service.MemberService;
import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpSession;
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

    @PostMapping("/memberLogin")
    public MemberVO memberLogin(@RequestBody MemberVO memberVO, HttpSession session){
        System.out.println(memberVO);
        MemberVO loginInfo = memberService.memberLogin(memberVO);

        if(loginInfo != null){
            session.setAttribute("loginInfo" ,loginInfo);
        }

        return loginInfo;
    }
}
