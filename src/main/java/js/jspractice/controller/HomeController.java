package js.jspractice.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/")
public class HomeController {

    //    @ResponseBody
    @GetMapping()
    public String home(Model model) {
        model.addAttribute("message", "Hello World!");
        return "home";
    }
}
