FROM java:8
EXPOSE 8081:8081
ADD  /target/startime-0.0.1-SNAPSHOT.jar startime-0.0.1-SNAPSHOT.jar
CMD ["docker wait db [db]"]
ENTRYPOINT ["java","-jar","-Dspring.profiles.active=container","startime-0.0.1-SNAPSHOT.jar"]


