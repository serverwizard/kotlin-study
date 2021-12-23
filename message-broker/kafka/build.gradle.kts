plugins {
    kotlin("jvm")
}

tasks.getByName<Jar>("jar") {
    enabled = true
}

dependencies {
    implementation("org.springframework.kafka:spring-kafka")
}
