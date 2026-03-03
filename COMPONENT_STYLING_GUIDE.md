# Component Styling Guide - Modern UI Redesign

This guide provides standards for styling all content pages and components in the complaint management system.

## Page Structure Template

All pages should follow this structure:

```tsx
import { PageHeader } from '@/components/page-header';
import { PageSection } from '@/components/page-section';

export function YourPageContent() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader 
        title="Page Title"
        description="Page description"
        icon={<IconComponent />}
        action={<Button>Action</Button>}
      />
      
      <PageSection 
        title="Section Title"
        description="Section description"
      >
        {/* Content goes here */}
      </PageSection>
    </div>
  );
}
```

## Typography Hierarchy

- **h1 (Page Title)**: text-4xl md:text-5xl font-bold
- **h2 (Section Title)**: text-3xl md:text-4xl font-bold
- **h3 (Subsection)**: text-2xl md:text-3xl font-semibold
- **h4**: text-xl font-semibold
- **p (Body)**: text-base leading-relaxed
- **small**: text-sm text-muted-foreground

## Color Usage

### Light Mode
- **Background**: #ffffff
- **Card Background**: #f8f8f8
- **Text**: #0a0a0a
- **Muted Text**: #6b7280
- **Primary**: #0891b2 (Cyan/Teal)
- **Accent**: #ea580c (Orange)

### Dark Mode
- **Background**: #0f172a
- **Card Background**: #1e293b
- **Text**: #f8fafc
- **Muted Text**: #cbd5e1
- **Primary**: #06b6d4
- **Accent**: #f97316

## Component Patterns

### Cards
```tsx
<Card className="modern-card">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    {/* Content */}
  </CardContent>
</Card>
```

### Grid Layouts
- **card-grid**: 3-column on large screens, responsive
- **card-grid-2**: 2-column on medium screens
- **card-grid-4**: 4-column on large screens for KPIs

### Buttons
- **default**: Primary action, cyan background
- **secondary**: Alternative action
- **outline**: Tertiary action
- **ghost**: Low prominence action
- **destructive**: Danger action (red)

### Badges
- **default**: Primary badge (cyan background)
- **success**: Success state (green)
- **warning**: Warning state (yellow)
- **destructive**: Error state (red)
- **outline**: Neutral badge

## Spacing Standards

- **Page padding**: p-4 md:p-6 lg:p-8
- **Section spacing**: space-y-6 md:space-y-8
- **Content gap**: gap-4 md:gap-6
- **Card padding**: p-6
- **Small card padding**: p-4

## Common Page Layouts

### Dashboard-Style Pages
```tsx
<div className="content-wrapper">
  <PageHeader title="Dashboard" />
  <div className="card-grid-4">
    <StatCard ... />
    <StatCard ... />
    <StatCard ... />
    <StatCard ... />
  </div>
  <PageSection title="Recent Data">
    {/* Table or list */}
  </PageSection>
</div>
```

### List/Table Pages
```tsx
<div>
  <PageHeader 
    title="Items"
    action={<Button>Create</Button>}
  />
  <PageSection>
    <div className="space-y-4">
      {/* Items or table */}
    </div>
  </PageSection>
</div>
```

### Detail/Form Pages
```tsx
<div>
  <PageHeader 
    title="Item Details"
    breadcrumb={<Breadcrumb ... />}
  />
  <PageSection>
    <div className="card-grid-2">
      <Card>{/* Section 1 */}</Card>
      <Card>{/* Section 2 */}</Card>
    </div>
  </PageSection>
</div>
```

## Interactive Elements

### Hover States
- Cards: `hover:shadow-md hover:border-border`
- Buttons: Built-in with `active:scale-95`
- Rows: `hover:bg-muted/50`

### Focus States
- All interactive elements: `focus-visible:outline-2 focus-visible:ring-ring`

### Transitions
- Duration: 150-200ms
- Timing: ease, ease-in-out
- Properties: color, background-color, border-color, shadow

## Responsive Design

### Breakpoints
- Mobile: default (< 640px)
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px

Always design mobile-first, then enhance for larger screens.

## Dark Mode Compliance

All components must:
1. Use CSS variables for colors (not hardcoded)
2. Have adequate contrast ratio (WCAG AA minimum)
3. Support smooth theme transitions
4. Look good in both light and dark modes

## Accessibility

- Use semantic HTML (section, article, nav, aside)
- Include proper heading hierarchy (h1 → h2 → h3)
- Add alt text to images
- Use aria-labels for icon-only buttons
- Ensure minimum 48px touch targets
- Support keyboard navigation

## Common Patterns

### Empty State
```tsx
<div className="flex flex-col items-center justify-center py-12">
  <Icon className="h-12 w-12 text-muted-foreground mb-4" />
  <h3 className="text-lg font-semibold mb-2">No items</h3>
  <p className="text-muted-foreground text-sm">Create your first item to get started</p>
</div>
```

### Loading State
Use `<LoadingAnimation />` component for loading states.

### Error State
```tsx
<Card className="border-destructive/20 bg-destructive/5">
  <CardContent className="pt-6">
    <div className="flex gap-3">
      <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0" />
      <div>
        <h4 className="font-semibold text-destructive">Error</h4>
        <p className="text-sm text-destructive/80">{error.message}</p>
      </div>
    </div>
  </CardContent>
</Card>
```

## Implementation Checklist

- [ ] Uses PageHeader component
- [ ] Uses PageSection for content grouping
- [ ] Implements proper card-grid layout
- [ ] All buttons have proper variants
- [ ] Badges use semantic variants
- [ ] Responsive on mobile/tablet/desktop
- [ ] Dark mode works correctly
- [ ] Proper spacing and padding
- [ ] Focus states visible
- [ ] Keyboard navigation supported
- [ ] Accessibility attributes present
- [ ] Loading/empty/error states handled
