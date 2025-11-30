# WebBoost - Blog Analyzing tool

Discover hidden insights within your blog posts like never before and get smarter blog checkups with Real fixes.

## Why WebBoost?
Turns your raw blog URL into an actionable improvement report **for content creators and blogger** in seconds. No bloated dashboards, no generic advice—prioritized, weight-aware scoring.

## Core Features
- Unified scoring (content + UX + SEO + social + ad experience).
- Weighted overall score (not a simple average).
- Drill-down metric overlays with internal component scores.
- Readability multi-index (Flesch, Fog, SMOG, Coleman-Liau, ARI).
- Engagement text heuristics (questions, CTAs, sentiment).
- Informativeness depth (word count, headers, media, citations).
- Discoverability (navigation, search, breadcrumbs, sitemap).
- Layout quality (mobile meta, security, whitespace, typography, contrast).
- SEO elements (title/meta, indexing, schema, keywords, links, freshness, URL quality).
- Social integration detection (platforms, share buttons, proof).
- Ad intrusiveness scoring (density, placement, autoplay penalties).
- Recommendation prioritization (critical, high, medium, low, excellent).

## Installation
1. Clone
```
git clone https://github.com/your-org/webboost.git
cd webboost
```
2. Run with Bash Script
```
bash start.sh
```
3. Open in Browser at **http://localhost:5001**

## Quick Usage Guide
1. Open landing page
2. Enter a blog post URL
3. Submit to receive dashboard with scores + recommendations
4. Hover metrics for breakdown; review priorities
5. Iterate and re-run

## Scoring Guide
[FOLLOW THIS LINK](docs/SCORING_GUIDE.md)

## Dashboard Visual Guide
[FOLLOW THIS LINK](docs/DASHBOARD_VISUAL_GUIDE.md)

## Tech Stack
- Frontend: HTML5 / CSS / Vanilla JS
- Backend: Python (Flask)
- Python Dependencies:
    - HTML Parsing: BeautifulSoup
    - Browser Automation: Playwright
    - Text Analysis: textstat & nltk
    - Async HTTP client: aiohttp
- Deployment: Vercel

## Data Sources (Free, No paid APIs required)
- Content HTML parsing
- Internal link extraction
- Basic performance timing
- Keyword density calculation
- Citation pattern detection

## Testing

### Command Line Usage
```bash
python3 cli.py analyze https://yourblog.com/post
```

### Test the System
```bash
python3 test_analyzer.py
```

## Disclaimer
Scores are heuristic approximations—use them as directional guidance, not absolutes.

## Team Members
- Krishirajsinh Puwar
- Manjunath Naidugari
- Vishnu Mehta
- Enkela Tafa
- Angel Choi
- Soyeong Jeong
