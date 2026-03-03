# Developer Guide - Modern UI System

Welcome to the modern UI system. This guide will help you understand and use the new design patterns.

## Quick Reference

### Import These Components

```tsx
// Page structure
import { PageHeader } from '@/components/page-header';
import { PageSection } from '@/components/page-section';

// UI components
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
```

### Minimum Page Structure

Every page should have this structure:

```tsx
"use client"

import { PageHeader } from '@/components/page-header';
import { PageSection } from '@/components/page-section';
import { Card } from '@/components/ui/card';

export function YourPageContent() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader 
        title="Page Title"
        description="What this page is about"
      />
      
      <PageSection title="Section Title">
        {/* Your content here */}
      </PageSection>
    </div>
  );
}
```

## CSS Classes You'll Use Most

### Spacing
```tsx
// Page padding
className="p-4 md:p-6 lg:p-8"

// Section spacing
className="space-y-6 md:space-y-8"

// Grid gap
className="gap-4 md:gap-6"
```

### Layout
```tsx
// Center content
className="flex-center"

// Space between
className="flex-between"

// Responsive grid for cards
className="card-grid"        // 3 columns on desktop
className="card-grid-2"      // 2 columns on desktop
className="card-grid-4"      // 4 columns on desktop
```

### Cards
```tsx
// Standard card with hover effect
className="modern-card"

// Compact card
className="modern-card-sm"
```

### Text
```tsx
// Muted text
className="text-muted-foreground"

// Small supporting text
className="text-subtle"

// Emphasized text
className="text-emphasis"

// Large body text
className="text-lead"
```

### Colors
All colors should use CSS variables, NOT hardcoded colors:

```tsx
// Good
<div className="bg-primary text-primary-foreground">

// Bad
<div className="bg-cyan-500 text-white">
```

## Component Examples

### Page with KPI Cards

```tsx
import { PageHeader } from '@/components/page-header';
import { PageSection } from '@/components/page-section';
import { StatCard } from '@/components/ui/stat-card';

export function DashboardContent() {
  return (
    <div className="bg-background min-h-screen">
      <PageHeader 
        title="Dashboard"
        description="Your daily overview"
      />
      
      <PageSection>
        <div className="card-grid-4">
          <StatCard label="Active" value={42} trend={12} />
          <StatCard label="Resolved" value={128} trend={-5} />
          <StatCard label="Pending" value={15} trend={3} />
          <StatCard label="Critical" value={2} trend={0} />
        </div>
      </PageSection>
    </div>
  );
}
```

### Page with Cards

```tsx
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export function ListPage() {
  return (
    <div className="card-grid">
      {items.map(item => (
        <Card key={item.id} className="modern-card">
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            {item.content}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
```

### Page with Buttons

```tsx
import { Button } from '@/components/ui/button';

export function ActionPage() {
  return (
    <div className="space-y-4">
      {/* Primary action */}
      <Button variant="default">Create New</Button>
      
      {/* Secondary action */}
      <Button variant="secondary">Save</Button>
      
      {/* Tertiary action */}
      <Button variant="outline">Cancel</Button>
      
      {/* Ghost action */}
      <Button variant="ghost">Clear</Button>
      
      {/* Danger action */}
      <Button variant="destructive">Delete</Button>
    </div>
  );
}
```

### Page with Badges

```tsx
import { Badge } from '@/components/ui/badge';

export function StatusPage() {
  return (
    <div className="space-y-4">
      <Badge variant="default">Primary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="destructive">Error</Badge>
      <Badge variant="info">Information</Badge>
      <Badge variant="outline">Neutral</Badge>
    </div>
  );
}
```

## Responsive Design Tips

### Always Use Tailwind Breakpoints

```tsx
// Good - Mobile first
className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"

// Good - Responsive text
className="text-base md:text-lg lg:text-xl"

// Good - Responsive padding
className="p-4 md:p-6 lg:p-8"

// Bad - Hardcoded sizes
className="grid grid-cols-2"
```

### Breakpoints Available
- `sm:` - 640px
- `md:` - 768px  
- `lg:` - 1024px
- `xl:` - 1280px

## Dark Mode Checklist

All components automatically support dark mode through CSS variables:

- [ ] Using theme colors (primary, secondary, etc.) not hardcoded colors
- [ ] Tested appearance in dark mode using theme switcher
- [ ] No text colors are hardcoded (use text-foreground, text-muted-foreground)
- [ ] No background colors are hardcoded (use bg-background, bg-card)
- [ ] Contrast ratios meet WCAG AA standards in both modes

## Common Mistakes to Avoid

### ✗ Wrong - Hardcoded colors
```tsx
<div className="bg-white text-black">This breaks dark mode!</div>
```

### ✓ Right - Using CSS variables
```tsx
<div className="bg-card text-foreground">This works in both modes</div>
```

### ✗ Wrong - Not responsive
```tsx
<div className="grid grid-cols-3 gap-6">
  {/* Only works on desktop */}
</div>
```

### ✓ Right - Mobile first responsive
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
  {/* Works on all screen sizes */}
</div>
```

### ✗ Wrong - Custom spacing
```tsx
<div className="p-[16px] mx-[8px] py-[24px]">
  {/* Inconsistent with design system */}
</div>
```

### ✓ Right - Using design system
```tsx
<div className="p-4 mx-2 py-6">
  {/* Consistent with design system */}
</div>
```

## Typography Usage

### Headings
```tsx
// h1 - Page title
<h1 className="text-4xl md:text-5xl font-bold">Page Title</h1>

// h2 - Section title  
<h2 className="text-3xl md:text-4xl font-bold">Section</h2>

// h3 - Subsection
<h3 className="text-2xl font-semibold">Subsection</h3>

// h4 - Sub-subheading
<h4 className="text-xl font-semibold">Sub</h4>
```

### Body Text
```tsx
// Normal paragraph
<p className="text-base leading-relaxed">Content</p>

// Muted/secondary text
<p className="text-muted-foreground">Secondary</p>

// Small supporting text
<p className="text-sm text-muted-foreground">Support</p>

// Emphasized text
<p className="font-semibold text-foreground">Important</p>
```

## State Management

### Loading State
```tsx
import { LoadingAnimation } from '@/components/ui/loading-animation';

{isLoading && <LoadingAnimation />}
```

### Empty State
```tsx
<div className="flex flex-col items-center justify-center py-12">
  <Icon className="h-12 w-12 text-muted-foreground mb-4" />
  <h3 className="text-lg font-semibold">No items found</h3>
  <p className="text-muted-foreground">Create your first item</p>
</div>
```

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

## Form Best Practices

```tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

<Card>
  <CardHeader>
    <CardTitle>Form Title</CardTitle>
  </CardHeader>
  <CardContent className="space-y-4">
    <div className="space-y-2">
      <label className="text-sm font-medium">Field Label</label>
      <Input placeholder="Placeholder text" />
    </div>
    <Button type="submit" className="w-full">
      Submit
    </Button>
  </CardContent>
</Card>
```

## Accessibility Checklist

- [ ] Heading hierarchy is correct (h1 → h2 → h3)
- [ ] All images have alt text
- [ ] All buttons/links have clear labels
- [ ] Color is not the only way to convey information
- [ ] Focus indicators are visible
- [ ] Keyboard navigation works
- [ ] Contrast ratios meet WCAG AA (4.5:1 for text)
- [ ] Touch targets are at least 48px

## Performance Tips

1. **Use Next.js Image Component** for images
2. **Code split large pages** with React.lazy
3. **Memoize expensive components** with React.memo
4. **Use SWR for data fetching** (already in use)
5. **Avoid inline styles** - use classes
6. **Don't repeat CSS** - use utility classes

## Testing in Dark Mode

1. Click theme icon in top-right of header
2. Select "Dark"
3. Verify:
   - Text is readable
   - Buttons are visible
   - Cards have proper contrast
   - Icons are visible

## Reference Files

- `COMPONENT_STYLING_GUIDE.md` - Detailed patterns and examples
- `UI_REDESIGN_SUMMARY.md` - Technical details
- `UI_REDESIGN_README.md` - Overview and features

## Getting Help

1. Check COMPONENT_STYLING_GUIDE.md for patterns
2. Look at similar existing pages for examples
3. Review PageHeader and PageSection components
4. Test in both light and dark modes

Good luck! The new UI system is designed to be intuitive and consistent. Follow the patterns above and your pages will look great.
