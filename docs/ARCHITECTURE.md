# Calibur Architecture

## Design Philosophy

Calibur follows a layered architecture.

Each layer has exactly one responsibility.

No business logic should live inside UI components.

---

## Architecture

UI Components

↓

Hooks

↓

Game Engine

↓

Storage

↓

Data

---

## Layer Responsibilities

### UI

Responsible for:

- Rendering
- User Interaction
- Layout

Never:

- Calculates XP
- Changes missions
- Updates storage

---

### Hooks

Responsible for:

- Connecting UI to Game Engine

Examples:

- useUser
- useProgression

---

### Game Engine

Responsible for all game rules.

Examples:

- XP
- Missions
- Progression
- Achievements
- Inventory

Game Engine never touches React.

---

### Storage

Responsible for persistence.

Examples:

- LocalStorage
- Future Database
- Cloud Save

Storage knows nothing about UI.

---

### Data

Static project data.

Examples:

- Levels
- Quotes
- Categories
- Avatars
- Achievements

---

## Golden Rule

UI

↓

Hooks

↓

Game Engine

↓

Storage

↓

Data

Never the opposite.