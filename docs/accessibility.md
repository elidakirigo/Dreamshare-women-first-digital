# Accessibility

This website is enabled for accesibilty. I used two tools to test accessibility. This are:

1. https://www.accessibilitychecker.org/ find the test [here](https://www.accessibilitychecker.org/audit/?website=https%3A%2F%2Fnextjs-tech.vercel.app%2F&flag=ww)
2. Accessibility Insights For Chrome. You can download it [here](https://accessibilityinsights.io/downloads/) and run the manual tests.

# Results:

In [Accessibility Checker](https://www.accessibilitychecker.org/) the following audits were passed:

#### Passed Tests:

1. Values assigned to `role=""` are valid ARIA roles.
2. `button`, `link`, and `menuitem` elements have accessible names.
3. ARIA attributes are used as specified for the element's role.
4. Deprecated ARIA roles were not used.
5. `[aria-hidden="true"]` is not present on the document `<body>`.
6. Elements use only permitted ARIA attributes.
7. `[role]`s have all required `[aria-*]` attributes.
8. `[role]` values are valid.
9. `[aria-*]` attributes have valid values.
10. `[aria-*]` attributes are valid and not misspelled.
11. Buttons have an accessible name.
12. Background and foreground colors have a sufficient contrast ratio.
13. Document has a `<title>` element.
14. Heading elements appear in a sequentially-descending order.
15. `<html>` element has a `[lang]` attribute.
16. Image elements have `[alt]` attributes.
17. Image elements do not have `[alt]` attributes that are redundant text.
18. Form elements have associated labels.
19. Links have a discernible name.
20. `[user-scalable="no"]` is not used in the `<meta name="viewport">` element, and the `[maximum-scale]` attribute is not less than 5.
21. No element has a `[tabindex]` value greater than 0.
22. Touch targets have sufficient size and spacing.

## Results From Manual Checks in Accessibility Insights

### Keyboard:

#### Passed Tests:

1. Users can use Tab and Shift+Tab to navigate between widgets both forwards and backwards.
   Keyboard
2. Users can navigate to all interactive interface components using a keyboard.
3. Users are able to navigate away from all components using a keyboard.
4. Navigating to a component must not trigger any unexpected change of context.
5. Components must not require specific timings for individual keystrokes.

### Link Purpose:

#### Passed Tests:

1. Links with different destinations have different link text.
2. Links with the same destination have the same link text.
3. Link's purpose is clear from its accessible name

#### Image Purpose:

#### Passed Tests:

1. Correct Use of alt Attributes: Images intended to convey meaningful content have descriptive alt attributes that accurately describe the image.
2. Decorative Images use an empty alt attribute (alt="") so that screen readers can ignore them, preventing unnecessary announcements.
3. The alt attribute does not contain redundant text or repeat information already provided in the surrounding content.
4. Images do not have alt attributes that simply reference the filename, as this provides no useful information to screen reader users.

#### Focus Order

#### Passed Tests:

1. Components receive focus in an order that preserves meaning and operability.

#### UI components

#### Passed Tests:

1. Visual information used to identify active user interface components and their states must have sufficient contrast.

#### No Missing Heading

#### Passed Tests:

1. Text that looks like a heading must be coded as a heading.

#### By Pass Blocks

#### Failed

1. A page has a keyboard-accessible method to bypass repetitive content.Such as a skip link.
