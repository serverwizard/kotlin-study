package com.homepage.serverwizard.homepageapi.controller

import com.homepage.serverwizard.homepageservice.user.UserService
import com.homepage.serverwizard.homepageservice.user.domain.User
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/users")
class UserApiController(
    private val userService: UserService
) {
    @GetMapping
    fun findAllUsers(): List<User> {
        return userService.findAllUsers()
    }
}
