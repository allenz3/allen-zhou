# Allen Zhou — Software Engineering Portfolio

[Portfolio website](https://allenz3.github.io/allen-zhou/)

A small personal website with About, Resume, and Projects pages. Built with
HTML, CSS, and a small JavaScript handler for printing; no build step or
dependencies are required.

## Local preview

Open `index.html` in a browser, or serve this directory:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Visit `http://127.0.0.1:8000`. The navigation also works when opening
`index.html` directly. On the Resume page, use **Print / save PDF** to print
or save a PDF with the resume's print layout.
The Resume page also links to the supplied resume and cover letter PDFs.

## Editing

- `index.html`: a short introduction and background.
- `resume.html`: work experience, skills, and education.
- `projects.html`: project notes and public Microsoft feature links.
- `style.css`: desktop, mobile, and print layouts.
- `script.js`: the print button handler.
- `assets/allen-zhou.jpg`: the profile photo copied from LinkedIn for the About page.
- `documents/`: the original resume and cover letter PDFs linked on the Resume page.
