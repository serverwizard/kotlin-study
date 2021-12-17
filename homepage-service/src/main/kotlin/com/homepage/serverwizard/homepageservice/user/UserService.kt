package com.homepage.serverwizard.homepageservice.user

import com.homepage.serverwizard.homepageservice.user.domain.User
import com.homepage.serverwizard.homepageservice.user.domain.UserRepository
import org.springframework.stereotype.Service

@Service
class UserService(
    val userRepository: UserRepository
) {
    fun findAllUsers(): List<User> {
        return userRepository.findAll()
    }
}
