package js.jspractice.controller.api;

import io.micrometer.observation.transport.Propagator;
import org.springframework.web.bind.annotation.*;

@RestController("ApiHomeController")
@RequestMapping("api/community-board-likes")
public class HomeController {

//    public static class LikeRequest {
//        private Long boardId;
//        private Integer type;
//
//        public Long getBoardId() {
//            return boardId;
//        }
//
//        public Integer getType() {
//            return type;
//        }
//
//    }

    @PostMapping("like")
    public int like(@RequestBody String boardId) {
//        @RequestBody LikeRequest LikeRequest
//        @AuthenticationPrincipal CustomUserDetails userDetails
        System.out.printf("게시글 아이디 좋아요: %d ",Long.parseLong(boardId));
        return 100;
    }

    @PostMapping("dislike")
    public int disLike(@RequestBody String boardId) {
//        @RequestBody LikeRequest LikeRequest
//        @AuthenticationPrincipal CustomUserDetails userDetails
        System.out.printf("게시글 아이디 싫어요 : %d ",Long.parseLong(boardId));
        return 200;
    }


}

