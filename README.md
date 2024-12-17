### Todo

## Design system

- [x] Add colours to tailwind config
- [x] Add typography to tailwind config
- [x] Add spacing to tailwind config
- [x] Import correct font files
- [x] Add icons
- [x] Add logo
- [x] Add button component (shadcn)
- [x] Add input components: text, radio, select, checkbox (shadcn)

## Layout

- [x] Container component
- [x] Grid component
- [x] Main layout (grid - header, main, footer)

## Page

- [x] Header
- [x] Gallery
- [x] Breadcrumb
- [x] Product info
- [x] Product form

### Further updates

- Conditional price rendering based on subscription selection
- Improvements to fluid layout at intermediate breakpoints (not in design files)
- Improvements to form components (organization, state management)
- Client side error handling for forms
- Newsletter form validation (checkbox acting as an optional field)

### What I would do differently

I like the use of shadcn/ui components as it offers a level of consistency and accessibility. However, introducing them AFTER making the design system in the tailwind config did mean their implementation became a little more cumbersome. Done differently I would have initialized shadcn/ui in the project before creating the design system and then used that boilerplate to add in the design tokens/primitives. This would mean further adoption of shadcn/ui components would be much more streamlined.
