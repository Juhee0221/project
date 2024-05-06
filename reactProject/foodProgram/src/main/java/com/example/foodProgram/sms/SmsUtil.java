package com.example.foodProgram.sms;

import net.nurigo.sdk.NurigoApp;
import net.nurigo.sdk.message.exception.NurigoMessageNotReceivedException;
import net.nurigo.sdk.message.model.Message;
import net.nurigo.sdk.message.service.DefaultMessageService;
import org.springframework.stereotype.Service;

@Service("smsUtilService")
public class SmsUtil {

    DefaultMessageService messageService =  NurigoApp.INSTANCE.initialize
            ("NCSOAK1JNDICGXQ4", "XXOJ9TGPYU1EZWNL5NTP1LYNVL93SQEY",
                    "https://api.coolsms.co.kr");

    public void getMessage(String memberTel , String randomCode){
        // Message 패키지가 중복될 경우 net.nurigo.sdk.message.model.Message로 치환하여 주세요
        Message message = new Message();
        message.setFrom("01028688346");
        message.setTo(memberTel);
        //SMS는 한글 45자, 영자 90자까지 입력할 수 있습니다.
        message.setText("[ordering]문자 본인인증 서비스 : 인증번호는 [" + randomCode + "] 입니다.");

        try {
            // send 메소드로 ArrayList<Message> 객체를 넣어도 동작합니다!
            messageService.send(message);
        } catch (NurigoMessageNotReceivedException exception) {
            // 발송에 실패한 메시지 목록을 확인할 수 있습니다!
            System.out.println(exception.getFailedMessageList());
            System.out.println(exception.getMessage());
        } catch (Exception exception) {
            System.out.println(exception.getMessage());
        }
    }
}
