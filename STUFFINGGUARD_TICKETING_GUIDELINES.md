# StuffingGuard Ticketing Guidelines

This document defines standards for creating and managing tickets in StuffingGuard’s issue tracker. Following these guidelines ensures clarity, traceability, and consistent workflow across the team.

---

## 1. Ticket Title

- **Use imperative mood**: start with verbs like `Fix`, `Add`, `Remove`, `Update`.
- **Be concise and descriptive** (5–10 words ideally).
- Avoid filler words and unnecessary phrases.

**Examples:**

```
Fix landing page header showing unavailable links
Add job insights widget to dashboard
Update user profile form validation
Remove deprecated payment API
```

---

## 2. Ticket Description

Include the following sections:

### a) **Summary**

- Short description of the issue or feature.

### b) **Steps to Reproduce** (for bug reports)

- Numbered steps to reproduce the bug.

### c) **Expected Behavior**

- Describes what the system should do once the issue is fixed or the feature works correctly.
- Written from a **functional perspective** (what the user should see or experience).

### d) **Acceptance Criteria**

- Defines the **specific, measurable conditions** that must be met for the ticket to be considered complete.
- Serves as a checklist for QA/testing and final sign-off.

### e) **Actual Behavior** (for bugs)

- What currently happens.

### f) **Additional Information**

- Screenshots, links, or references to related tickets.

**Example:**

```
Summary:
Landing page header shows links to outdated pages.

Steps to Reproduce:
1. Visit the landing page.
2. Observe the header links.

Expected Behavior:
Only active and available links should display.

Acceptance Criteria:
- Header only shows active links from the navigation config.
- Deprecated links are not rendered in the UI.
- Changes are validated across desktop and mobile.

Actual Behavior:
Header displays links to pages that no longer exist.

Additional Info:
See ticket #12 for related fixes.

Labels:
bug, fix
```

---

## 3. Labels

Use labels to categorize tickets for easier filtering:

- `bug` → Issue that breaks functionality
- `feature` → New functionality or enhancement
- `documentation` → Docs or guides
- `chore` → Maintenance tasks
- `urgent` → Needs immediate attention

---

## 4. Business Group / Scope

Assign tickets to the relevant product module or business group:

- `auth` → Authentication & user management
- `dashboard` → Dashboard features
- `tracking` → Job application tracking
- `insights` → Analytics or insights features

This will also be reflected in the **branch name**.

---

## 5. Branch Naming

Follow the branch naming convention:

```
<ticket_type>/<business_group>-<ticket_number>_purpose
```

- **ticket_type** → `feature`, `fix`, `hotfix`, `chore`
- **business_group** → Product module or domain
- **ticket_number** → GitHub issue number
- **purpose** → Short description

**Example:**

```
feature/claims-45_add-policy-comparison
fix/dashboard-12_correct-chart-legend
```

---

## 6. Workflow

1. **Create ticket** → Fill title, description, labels, and business group.
2. **Assign ticket** → Developer picks up or is assigned the task.
3. **Branch creation** → Create a feature/fix branch following the naming convention.
4. **Development** → Implement changes on the branch.
5. **PR & Code Review** → Open a Pull Request, get approval, and merge into `dev`.
6. **Stage & Validation** → Merge `dev` into `stage` for non-dev validation.
7. **Production Release** → Merge `stage` into `main` after approval.
8. **Close Ticket** → Mark the ticket as resolved/closed after deployment.

---

## 7. Additional Tips

- Link the ticket in commits and PRs for traceability.
- Keep descriptions clear and actionable.
- Include references to related tickets if applicable.
- Always update the ticket status according to workflow progress.

---
