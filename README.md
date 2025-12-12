# NLCyber AdSlot Demo

A comprehensive demonstration of the NLCyber AdSlot React component, showcasing various ad placements, configurations, and integration patterns.

## Overview

This demo application provides an interactive showcase of the `nlcyber-adslot` package, demonstrating how to integrate NLCyber advertisements into web applications. The demo includes multiple ad placements, configuration options, and real-time debugging capabilities.

## Features Demonstrated

- 🎯 **Multiple Ad Placements** - Homepage banners, article ads, sidebar placements
- 📊 **Interactive Configuration** - Real-time adjustment of ad settings
- 🔧 **Debug Mode** - Built-in debugging and logging capabilities
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile
- 🎨 **Custom Styling** - Modern, clean UI with hover effects
- ⚡ **Live Updates** - Configuration changes update ads in real-time

## Quick Start (Next.js 15 + React 19)

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
npm install
```

### Run Dev Server

```bash
npm run dev
```

Open `http://localhost:3000`.

## Project Structure

```
adslot-demo/
├── app/
│   ├── components/
│   │   └── AdSlotDemo.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

## Notes

- The demo now uses Next.js 15 with the App Router and React 19.
- The demo uses ESM imports: `import { AdSlot } from 'nlcyber-adslot'`.
- API requests to `/api/*` are automatically proxied to `https://nlca.nlcyber.com/api/*` via Next.js rewrites.

## Demo Sections

### 1. Homepage Banner Ad
- **Placement**: `homepage_top`
- **Size**: 728x90 pixels
- **Use Case**: Top-of-page banner advertisements
- **Features**: Automatic ad selection, frequency capping

### 2. Article Content Integration
- **Placement**: `article_banner`
- **Size**: 728x90 pixels
- **Use Case**: In-content advertising
- **Features**: Seamless content integration

### 3. Sidebar Advertisements
- **Standard Sidebar**: 300x250 pixels
- **Square Ad**: 250x250 pixels
- **Skyscraper**: 160x600 pixels
- **Use Case**: Sidebar and column advertising

### 4. Configuration Panel
- **Debug Mode**: Toggle detailed logging
- **Ad Count**: Adjust number of ads to fetch (1-10)
- **Base URL**: Customize API endpoint
- **Real-time Updates**: Changes apply immediately

## AdSlot Component Usage

### Basic Usage

```jsx
import { AdSlot } from 'nlcyber-adslot';

function MyComponent() {
  return (
    <AdSlot 
      placement="homepage_top"
      width={728}
      height={90}
    />
  );
}
```

### Advanced Configuration

```jsx
<AdSlot
  placement="article_sidebar"
  baseUrl="https://www.nlcyber.com"
  width={300}
  height={250}
  adCount={5}
  showLabel={true}
  labelText="Advertisement"
  debug={false}
  errorMessage="Ad unavailable"
  loadingMessage="Loading ad..."
/>
```

### Available Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `placement` | `string` | `"homepage_top"` | Ad placement identifier |
| `className` | `string` | `""` | CSS class name for styling |
| `style` | `React.CSSProperties` | `{}` | Inline styles |
| `width` | `number` | `undefined` | Override ad width |
| `height` | `number` | `undefined` | Override ad height |
| `fallbackWidth` | `number` | `728` | Fallback width when no ad is loaded |
| `fallbackHeight` | `number` | `90` | Fallback height when no ad is loaded |
| `baseUrl` | `string` | `"https://www.nlcyber.com"` | Base URL for the ad API |
| `adCount` | `number` | `5` | Number of ads to fetch for selection |
| `errorMessage` | `string` | `"Ad unavailable"` | Custom error message |
| `loadingMessage` | `string` | `"Loading ad..."` | Custom loading message |
| `showLabel` | `boolean` | `true` | Show "Advertisement" label |
| `labelText` | `string` | `"Advertisement"` | Custom label text |
| `debug` | `boolean` | `false` | Enable debug logging |

## Available Placements

- `homepage_top` - Banner ads (728x90)
- `article_sidebar` - Sidebar ads (300x250)
- `article_banner` - Article content ads (728x90)
- `sidebar_square` - Square sidebar ads (250x250)
- `sidebar_skyscraper` - Tall sidebar ads (160x600)

## Integration Examples

### React Application

```jsx
import React from 'react';
import { AdSlot } from 'nlcyber-adslot';

function App() {
  return (
    <div>
      <header>
        <h1>My Website</h1>
        <AdSlot placement="homepage_top" />
      </header>
      
      <main>
        <article>
          <h2>Article Title</h2>
          <p>Article content...</p>
          <AdSlot placement="article_banner" />
          <p>More content...</p>
        </article>
        
        <aside>
          <AdSlot placement="article_sidebar" />
        </aside>
      </main>
    </div>
  );
}
```

### Next.js Integration (App Router)

```tsx
// app/page.tsx
'use client';

import { AdSlot } from 'nlcyber-adslot';

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to My Site</h1>
      <AdSlot placement="homepage_top" />

      <main>
        <p>Your content here...</p>
      </main>

      <AdSlot placement="article_sidebar" />
    </div>
  );
}
```

Note: The `'use client'` directive is required when using the AdSlot component in Next.js App Router since it uses React hooks.

## Styling

The demo includes comprehensive CSS styling that you can customize:

### CSS Classes

- `.nlcyber-adslot` - Main ad container
- `.nlcyber-adslot-loading` - Loading state
- `.nlcyber-adslot-error` - Error state

### Custom Styling Example

```css
.nlcyber-adslot {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: box-shadow 0.2s ease;
}

.nlcyber-adslot:hover {
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}
```

## Debug Mode

Enable debug mode to see detailed logging:

```jsx
<AdSlot 
  placement="homepage_top"
  debug={true}
/>
```

Debug output includes:
- API requests and responses
- Ad selection logic
- Frequency capping decisions
- Click and impression tracking

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Internet Explorer 11 (with polyfills)

## Troubleshooting

### Common Issues

**Ads not loading:**
- Check network connectivity
- Verify the `baseUrl` is correct
- Enable debug mode to see error details
- Check browser console for CORS errors

**Styling issues:**
- Ensure the container has proper dimensions
- Check for CSS conflicts
- Use the provided CSS classes for consistent styling

**Component not found:**
- Ensure the `nlcyber-adslot` package is installed
- Check that the package is properly imported
- Verify the package version compatibility

### Debug Checklist

1. Enable debug mode: `<AdSlot debug={true} />`
2. Check browser console for error messages
3. Verify API endpoint is accessible
4. Test with different placements
5. Check localStorage for frequency capping data

## Performance Considerations

- **Lazy Loading** - Ads are fetched only when the component mounts
- **Caching** - Uses browser caching for API responses
- **Minimal Bundle** - Small footprint with no external dependencies
- **Efficient Rendering** - Optimized React rendering with proper cleanup

## Security Features

- **JWT Tokens** - Secure tracking with short-lived tokens
- **CORS Support** - Proper cross-origin request handling
- **No Persistent IDs** - Privacy-friendly frequency capping
- **Input Validation** - Safe parameter handling

## Contributing

This demo is designed to be easily extensible. You can:

1. Add new ad placement examples
2. Create additional configuration options
3. Implement new styling themes
4. Add integration examples for other frameworks

## License

This demo project is provided as-is for educational and demonstration purposes. The `nlcyber-adslot` package is licensed under the MIT License.

## Support

- 📧 Email: support@nlcyber.com
- 🐛 Issues: [GitHub Issues](https://github.com/qlibrlabs/nlcyber-adslot/issues)
- 📖 Documentation: [NLCyber Docs](https://docs.nlcyber.com)

## Changelog

### v1.0.0
- Initial demo release
- Multiple ad placement examples
- Interactive configuration panel
- Debug mode demonstration
- Responsive design
- Comprehensive documentation
