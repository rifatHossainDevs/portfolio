import { profile } from './profile'
export interface Project {
  id: string; name: string; kind: 'dealer' | 'tools' | 'map'; description: string
  tech: string[]; features: string[]; architecture?: string
  github: string       // project-specific URL if you have one; currently your GitHub profile
  image?: string       // set to a screenshot path (e.g. '/projects/toolsy.png') to replace the CSS mockup
}
export const projects: Project[] = [
  { id: 'dealership', name: 'Dealership Management System', kind: 'dealer',
    description: 'A comprehensive Android application designed to streamline dealership operations by managing customers, inventory, and salesman activities.',
    tech: ['Kotlin', 'MVVM', 'Firebase', 'REST API', 'Retrofit'],
    features: ['Salesman management', 'Customer management', 'Inventory tracking', 'Sales tracking', 'REST API integration', 'Retrofit'],
    architecture: 'Built on the MVVM architecture pattern in Kotlin, with Retrofit handling REST API communication and Firebase as a backend service.',
    github: "https://github.com/rifatHossainDevs/Sales-Man.git" },
  { id: 'toolsy', name: 'Toolsy', kind: 'tools',
    description: 'A multi-purpose utility application that provides a collection of everyday tools with a clean and responsive user interface.',
    tech: ['Flutter', 'Firebase', 'Provider', 'Local Storage'],
    features: ['Multiple productivity and utility tools', 'Provider state management', 'Local storage', 'Clean interface', 'Responsive design', 'User-friendly experience'],
    architecture: 'A Flutter app using Provider for state management and local storage for on-device data.',
    github: "https://github.com/rifatHossainDevs/toolsy-flutter-v1.git" },
  { id: 'mapzy', name: 'Mapzy', kind: 'map',
    description: 'A location-based mobile application that enables users to explore maps, track routes, and monitor travel information in real time.',
    tech: ['Flutter', 'Google Maps', 'Firebase', 'Geolocator'],
    features: ['Google Maps integration', 'Real-time location tracking', 'Walking route calculation', 'Distance calculation', 'Location-based functionality'],
    github: "https://github.com/rifatHossainDevs/mapzy.git" },
]
