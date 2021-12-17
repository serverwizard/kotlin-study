package com.homepage.serverwizard

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class HomepageApiApplication

fun main(args: Array<String>) {
    runApplication<HomepageApiApplication>(*args)
}
