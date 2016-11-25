Canvas does not support SAML login and other login methods simultanously. 

We've worked around this problem by implementing an alternative login page, frontpage.html

We've configured our Canvas web server to redirect to that page, which in turn redirects the user to the correct page.
