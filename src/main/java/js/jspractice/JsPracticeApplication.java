package js.jspractice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.sql.SQLOutput;

@SpringBootApplication
public class JsPracticeApplication {

    public static void main(String[] args) {
        SpringApplication.run(JsPracticeApplication.class, args);
        System.out.println("서버시작!");
    }

}
