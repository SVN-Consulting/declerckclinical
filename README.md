# Decleck Clinical

A modern web application built with **Next.js** for Decleck Clinical.

## 📋 Overview

**Decleck Clinical** is a Next.js-based web application designed to provide a modern, maintainable, and scalable platform for Decleck Clinical.

The project is developed using a feature-branch workflow. Each functional requirement is developed in its own branch and can be merged into the main development branch through a Pull Request.

---

## 🚀 Requirements

The following requirements define the planned functionality of the application.

| ID      | Requirement                         | Branch                      | Status         |
| ------- | ----------------------------------- | --------------------------- | -------------- |
| REQ-001 | Project setup and base architecture | `feature/project-setup`     | 🔄 In progress |
| REQ-002 | Website layout and navigation       | `feature/layout-navigation` | ⬜ Planned     |
| REQ-003 | Home page                           | `feature/home-page`         | ⬜ Planned     |
| REQ-004 | About / Company information         | `feature/about`             | ⬜ Planned     |
| REQ-005 | Services                            | `feature/services`          | ⬜ Planned     |
| REQ-006 | Therapeutic expertise               | `feature/expertise`         | ⬜ Planned     |
| REQ-007 | Quality and Compliance              | `feature/quality`           | ⬜ Planned     |
| REQ-008 | Partnerships                        | `feature/partnerships`      | ⬜ Planned     |
| REQ-009 | Knowledge base                      | `feature/knowledge-base`    | ⬜ Planned     |
| REQ-010 | Experience page                     | `feature/experience`        | ⬜ Planned     |
| REQ-011 | Contact page and contact form       | `feature/contact`           | ⬜ Planned     |
| REQ-012 | Legal and Privacy                   | `feature/legal`             | ⬜ Planned     |
| REQ-013 | SEO and metadata                    | `feature/seo`               | ⬜ Planned     |
| REQ-014 | Production deployment               | `feature/deployment`        | ⬜ Planned     |

### Requirement workflow

Each requirement should be implemented in its corresponding feature branch.

```text
development
    │
    ├── feature/project-setup
    ├── feature/layout-navigation
    ├── feature/home-page
    ├── feature/about
    ├── feature/services
    ├── feature/contact
    ├── feature/expertise
    ├── feature/quality
    ├── feature/partnerships
    ├── feature/knowledge-base
    ├── feature/experience
    ├── feature/legal
    ├── feature/seo
    └── feature/deployment
```

Once a requirement has been completed, the feature branch should be submitted as a **Pull Request** targeting `development`.

---

## 🛠️ Tech Stack

### Frontend

- **Next.js** — React framework for the application
- **React** — UI library
- **TypeScript** — Type-safe JavaScript
- **Tailwind CSS** — Utility-first CSS framework

### UI

- **shadcn/ui** — Reusable UI components
- **Lucide React** — Icon library

### Database

- **PostgreSQL** — Database

### Development

- **ESLint** — Code quality and linting
- **Prettier** — Code formatting
- **Git** — Version control
- **GitHub** — Repository and Pull Requests

### Testing

The project can use:

- **Vitest** — Unit and component testing
- **React Testing Library** — React component testing
- **Playwright** — End-to-end testing

---

## 📦 Requirements

Before running the project, make sure you have the following installed:

- **Node.js** 20+
- **npm**, **Yarn**, **pnpm**, or **Bun**
- **Git**

Check your installed versions:

```bash
node --version
git --version
```

---

## 📌 Requirement Status

The README should be updated whenever a requirement changes status.

### Status definitions

- ⬜ **Planned** — Requirement has not been started.
- 🔄 **In progress** — Requirement is currently being developed.
- 👀 **Review** — Pull Request is open and awaiting review.
- ✅ **Completed** — Requirement has been merged into `development`.
- 🚀 **Released** — Requirement has been released to `main`.

---

## 📄 License

This project is proprietary software developed for **Decleck Clinical**.

All rights reserved for **Decleck Clinical**.
