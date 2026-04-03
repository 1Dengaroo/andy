---
name: update-resume
description: Replace the portfolio resume PDF with a new one from a local file path, then commit the change. Use when the user says "update resume", "replace resume", or provides a new resume file to swap in.
user_invocable: true
---

# Update Resume

Replace the current resume at `public/docs/resume.pdf` with a new file and commit.

## Arguments

The user must provide the absolute path to the new resume PDF on their machine.

## Steps

1. Verify the provided file exists and is a PDF.
2. Copy the file to `public/docs/resume.pdf`, replacing the existing one.
3. Commit with message: `feat: update resume`
