# Implementation Plan: Navigation & Writing Section

## Overview

Add navigation subheadings under the main "amir salah" title with "career" (stub) and "writing" (interactive) sections, plus a writing/stories system.

## Structure

### 1. Route Architecture

Update `src/main.jsx` to add routes:

- `/` → App (main homepage with 3D mesh)
- `/writing` → Writing component (list of story titles)
- `/writing/was-i-alive` → StoryPage component (displays story content)
- `/writing/:slug` → StoryPage component (generic pattern for future stories)

### 2. Components to Create

#### `src/Writing.jsx`

- Display list of available stories
- Each story is a clickable link to its detail page
- Stories stored in a simple data structure (could move to DB later)

**Story data format:**

```javascript
const stories = [
    { slug: 'was-i-alive', title: 'Was I Alive?' },
    // add more stories here
]
```

#### `src/StoryPage.jsx`

- Accept a route parameter `:slug`
- Fetch/display story content based on slug
- Render markdown or HTML content

#### `src/Career.jsx` (stub)

- Placeholder component for now
- Can be expanded later

### 3. Updates to Existing Components

#### `src/App.jsx`

- Add two subheading items under "amir salah" h1
- Create list/navigation items for "career" and "writing"
- "career" link stays on homepage or goes to `/career` stub
- "writing" link goes to `/writing`
- Style as smaller text in same font family

#### `src/main.jsx`

- Add new routes to Router

### 4. Styling Considerations

- Keep subheadings in same font as main name
- Reduce font size (maybe 40-60% of h1)
- Maintain visual hierarchy
- Ensure links are interactive (cursor pointer, hover effects)
- Consider animation/effect consistency with existing design

### 5. Content Storage

- **Phase 1 (now):** Store story content directly in JSX components
- **Phase 2 (later):** Move to markdown files or database
- **Phase 1 structure:** Create `src/stories/` folder with individual story files

### 6. Implementation Steps

1. **Update main.jsx**
    - Add /writing route → Writing component
    - Add /writing/:slug route → StoryPage component
    - Optional: Add /career route → Career component (stub)

2. **Create Writing.jsx**
    - Import stories data
    - Render list of story links

3. **Create StoryPage.jsx**
    - Use `useParams()` to get slug
    - Find story by slug
    - Render story content

4. **Create Career.jsx** (optional for now, can be inline)
    - Simple stub message

5. **Update App.jsx**
    - Add navigation items (career, writing)
    - Link them appropriately

6. **Add styling**
    - Create CSS for navigation list under heading
    - Ensure responsive on different screen sizes

7. **Create story content**
    - Add "Was I Alive?" story to StoryPage or separate story file

## File Changes Summary

**New files:**

- `src/Writing.jsx`
- `src/StoryPage.jsx`
- `src/Career.jsx` (optional)
- `src/stories/wasIAlive.js` (or embed in StoryPage)

**Modified files:**

- `src/main.jsx` (add routes)
- `src/App.jsx` (add navigation items and styling)
- `src/index.css` or `src/App.css` (add styles for nav items)

## Future Considerations

- Add more stories easily by extending stories data
- Consider adding filtering/categorization
- Could add dates, tags, or metadata to stories
- Blog-like features (search, archive, etc.)
