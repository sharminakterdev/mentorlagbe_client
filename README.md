# MentorLagbe Client

This is the Next.js frontend for **MentorLagbe**, a role-based online and home tuition marketplace for students, tutors, and administrators.

The client provides the public landing pages, tuition discovery and filtering, authentication screens, Stripe payment redirects, profile management, and separate dashboards for every user role.

## Live project

- Live website: **Add the deployed client URL here**
- Backend API: **Add the deployed server URL here**

## Demo credentials

| Role | Email | Password |
| --- | --- | --- |
| Admin | `admin@mentorlagbe.com` | `Mentor@123` |
| Tutor | `tutor@mentorlagbe.com` | `Mentor@123` |
| Student | `student@mentorlagbe.com` | `Mentor@123` |

Demo credentials should be changed before deploying to a public production environment.

## Key features

- Responsive Tutor, Student, and Admin user interfaces
- Public home, pricing, tuition listing, and tuition details pages
- Server-side tuition search and filtering by title, subject, class level, and mode
- Server-side pagination controls
- Role-aware navigation and protected dashboard routes
- Student application creation and pending-application cancellation
- Tutor tuition post, edit, delete, active-status, and applicant-management flows
- Admin user, tuition moderation, and transaction-management views
- JWT-authenticated API requests
- Stripe checkout and payment success/cancel pages
- Direct ImgBB image upload support
- Profile editing with image URL or uploaded image
- Loading, 404, and error states
- Toast notifications for authentication, CRUD, payment, and validation feedback

## Tech stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Sonner toast notifications
- Lucide React icons
- Native `fetch` API with JWT bearer authentication

## Application routes

### Public routes

- `/` - Landing page
- `/tuitions` - Searchable tuition listings
- `/tuitions/[id]` - Tuition details and student application form
- `/pricing` - Free and Pro plans
- `/sign-in` - User login
- `/sign-up` - Student or Tutor registration
- `/payment/success` - Successful checkout result
- `/payment/cancel` - Cancelled checkout result

### Role-based dashboard routes

- `/dashboard/student`
- `/dashboard/student/my-applications`
- `/dashboard/tutor`
- `/dashboard/tutor/post-tuition`
- `/dashboard/tutor/my-tuitions`
- `/dashboard/tutor/applicants`
- `/dashboard/admin`
- `/dashboard/admin/users`
- `/dashboard/admin/tuitions`
- `/dashboard/admin/transactions`
- `/dashboard/profile`

## Main dependencies

| Package | Purpose |
| --- | --- |
| `next` | App Router framework and production build |
| `react` / `react-dom` | User interface rendering |
| `typescript` | Static type checking |
| `tailwindcss` | Utility-first styling |
| `lucide-react` | Interface icons |
| `sonner` | Toast notifications |
| `clsx` / `tailwind-merge` | Conditional and merged class-name handling |
| `eslint` / `eslint-config-next` | Code quality and Next.js lint rules |

## Environment setup

Create `.env.local` in this directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

For production, set `NEXT_PUBLIC_API_URL` to the deployed Express API URL, including its `/api` prefix.

An example environment file is available at `.env.local.example`.

## Local development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

Before starting the client, make sure the MentorLagbe server is running and `NEXT_PUBLIC_API_URL` points to it.

## Production commands

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

Run lint checks:

```bash
npm run lint
```

## Folder structure

```text
app/
  dashboard/          Role-based dashboard layouts and pages
  lib/                Authentication and API helpers
  payment/            Stripe success and cancellation pages
  sign-in/            Login page
  sign-up/            Registration page
  tuitions/           Tuition listing and details pages
  components.tsx      Shared navbar, footer, and tuition components
  globals.css         Global responsive design styles
  layout.tsx          Root layout and providers
```

## Deployment notes

- Add the production API URL to `.env.local` before building.
- Configure CORS on the Express server for the deployed frontend origin.
- Ensure protected dashboard routes continue to work after a page reload.
- Use HTTPS for both frontend and backend in production.
