import { HtmlContext } from 'next/dist/server/future/route-modules/app-page/vendored/contexts/entrypoints';
import { useState, useEffect, useRef } from 'react';

const useActiveSection = (sectionIds: string[]) => {
    const [activeSection, setActiveSection] = useState('');
    const sectionRefs = useRef<any>([]);

    useEffect(() => {
        // Populate sectionRefs array with refs to each section
        sectionRefs.current = sectionIds.map((sectionId) => {
            return document.getElementById(sectionId);
        }).filter((section) => section !== null);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sectionRefs.current.forEach((section: HTMLElement) => {
            if (section) {
                observer.observe(section);
            }
        });

        return () => {
            sectionRefs.current.forEach((section: HTMLElement) => {
                if (section) {
                    observer.unobserve(section);
                }
            });
        };
    }, [sectionIds]);

    return { activeSection, setActiveSection, sectionRefs };
};

export default useActiveSection;
