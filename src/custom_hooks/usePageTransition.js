import { useLocation, useNavigate } from "react-router-dom";

export default function usePageTransition() {

    const navigate = useNavigate();
    const location = useLocation();

    // Component container.
    const componentContainer = document.getElementById('componentContainer');

    // Transition and no transition tailwind classes.
    const transitionClasses = ['opacity-0', 'translate-y-12', 'blur-sm'];
    const noTransitionClasses = ['opacity-100', 'translate-y-0', 'blur-0'];

    // This function apply transition by adding and removing tailwind classes.
    const applyTransition = (classesToAdd, classesToRemove) => {
        classesToAdd.forEach(tailwindClass => {
            componentContainer.classList.add(tailwindClass);
        });

        classesToRemove.forEach(tailwindClass => {
            componentContainer.classList.remove(tailwindClass);
        });
    };

    // Handle link click.
    const handleLinkClick = (linkTo) => (e) => {
        e.preventDefault();

        // If user is already on the same page or there is no componentContainer, then do nothing.
        if ((location.pathname === linkTo) || !componentContainer) return;

        // Scroll to top.
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });

        // Apply transition.
        applyTransition(transitionClasses, noTransitionClasses);

        // After 300 milliseconds, change the page and remove the transition.
        setTimeout(() => {
            navigate(linkTo);
            applyTransition(noTransitionClasses, transitionClasses);
        }, 300);
    };

    return { handleLinkClick };
};
