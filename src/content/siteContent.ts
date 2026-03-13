import type { SiteContent } from '../types/content'

export const siteContent: SiteContent = {
  name: 'Muralidhara Bhat KS',
  headline: 'Software Engineer Building High-Throughput Distributed Systems',
  subheadline:
    '3.5+ years of experience delivering scalable Java microservices, event-driven systems, and production-grade web interfaces.',
  intro:
    'I focus on system design, backend performance, and resilient cloud-native delivery. My work includes latency optimization, telemetry pipelines, and full-stack feature execution with Java, Spring Boot, React, and Kafka.',
  location: 'Bengaluru, India',
  resumeUrl: '/Muralidhara_Bhat_Resume.pdf',
  contactEmail: 'ksmuralidhara0@gmail.com',
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/SlenderShield' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/ksmuralidhara0' },
  ],
  about: [
    'I am a software engineer specializing in distributed systems, microservices, and backend performance. I design and deliver robust services that stay reliable under real production load.',
    'I currently work across Spring Boot, Quarkus, Kafka, RabbitMQ, OpenSearch, and React, with a strong focus on measurable outcomes such as API latency reduction, throughput, and system resilience. I hold a BE in Computer Science from GECK (Kushalnagar).',
  ],
  skills: [
    'Java 17',
    'Spring Boot 3',
    'Quarkus',
    'Apache Kafka',
    'RabbitMQ',
    'Microservices',
    'REST APIs',
    'GraphQL',
    'React',
    'TypeScript',
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'Redis',
    'OpenSearch',
    'Docker',
    'Kubernetes',
    'AWS (ECS, S3, Lambda)',
    'Prometheus & Grafana',
    'JUnit & Mockito',
    'CI/CD (Jenkins, GitHub Actions)',
  ],
  experience: [
    {
      role: 'Software Engineer',
      company: 'Netcracker Technologies',
      period: 'Jun 2025 - Present',
      summary:
        'Delivered scalable backend features across cloud environments using Spring Boot and Quarkus. Built Kafka/REST-based service workflows, implemented RabbitMQ producer-consumer pipelines, and reduced quotation API latency from 40-60s to 5-6s via OpenSearch.',
    },
    {
      role: 'Software Engineer',
      company: 'Bosch Global Software Technologies',
      period: 'Jan 2023 - May 2025',
      summary:
        'Built and maintained Spring Boot APIs handling 100K+ daily telemetry requests for connected vehicle analytics. Improved response latency, implemented Kafka event-driven processing and AWS S3 archival, optimized MongoDB performance, and strengthened reliability with Resilience4j and gateway controls.',
    },
  ],
}
