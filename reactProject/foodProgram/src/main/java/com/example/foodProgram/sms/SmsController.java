package com.example.foodProgram.sms;

import com.example.foodProgram.member.VO.MemberVO;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.Random;

@RestController
public class SmsController {
    @Resource(name = "smsUtilService")
    private SmsUtil smsService;

    @PostMapping("/sendSms")
    public String sendRandomSms(@RequestBody MemberVO memberVO){
        System.out.println(memberVO);

        Random random = new Random();
        StringBuffer buffer = new StringBuffer();

        for(int i=0; i<6; i++){
            buffer.append(random.nextInt(10));
        }
        String randomCode = buffer.toString();
        System.out.println("수신자 번호 :" + memberVO.getMemberTel());
        System.out.println("인증번호 : " + randomCode);

//        smsService.getMessage(memberVO.getMemberTel(), randomCode);

        return randomCode;
    }

}
