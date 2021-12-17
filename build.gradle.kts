import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

// 빌드 스크립트에서 외부 라이브러리를 사용해야 하는 경우, 해당 block 에서 외부 라이브러리를 가지고 온다.
buildscript {
    repositories {
        mavenCentral()
    }
}

// 기능 확장을 위해 적절한 플러그인 사용한다.
plugins {
    id("org.springframework.boot") version "2.6.1" apply false
    id("io.spring.dependency-management") version "1.0.11.RELEASE" apply false // 스프링부트에 맞는 외부 라이브러리 버전을 자동으로 추가해주는 역할
    kotlin("jvm") version "1.6.0" apply false
    kotlin("plugin.spring") version "1.6.0" apply false
    kotlin("plugin.jpa") version "1.6.0" apply false

    id("org.jmailen.kotlinter") version "3.7.0" apply false
}

allprojects {
    group = "com.homepage.serverwizard"
    version = "1.0.0"

    // 컴파일러 설정
    tasks.withType<KotlinCompile> {
        kotlinOptions {
            jvmTarget = "11"
        }
    }

    // 테스트 환경 설정
    tasks.withType<Test> {
        useJUnitPlatform()
    }
}

subprojects {
    repositories {
        mavenCentral()
    }

    apply(plugin = "io.spring.dependency-management")
    apply(plugin = "org.jmailen.kotlinter")
}
