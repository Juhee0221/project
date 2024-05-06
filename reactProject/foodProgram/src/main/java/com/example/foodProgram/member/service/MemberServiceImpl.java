package com.example.foodProgram.member.service;

import com.example.foodProgram.member.VO.MemberVO;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("memberService")
public class MemberServiceImpl implements MemberService {
    @Autowired
    private SqlSession sqlSession;

    //멤버 회원가입
    @Override
    public void joinMember(MemberVO memberVO) {
        sqlSession.insert("memberMapper.joinMember", memberVO);
    }

    @Override
    public MemberVO memberLogin(MemberVO memberVO) {
        return sqlSession.selectOne("memberMapper.memberLogin", memberVO);
    }
}
