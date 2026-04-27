"""
Static data pools for realistic demo data generation.

Ported and expanded from ``realms/scripts/realm_generator.py``.
"""

FIRST_NAMES = [
    "Alice", "Bob", "Charlie", "Diana", "Edward", "Fiona", "George", "Helen",
    "Ivan", "Julia", "Kevin", "Laura", "Michael", "Nina", "Oliver", "Patricia",
    "Quinn", "Rachel", "Samuel", "Tina", "Ulrich", "Victoria", "William", "Xara",
    "Yuki", "Zoe", "Adrian", "Bella", "Carlos", "Delia", "Erik", "Fatima",
    "Gabriel", "Hannah", "Ichiro", "Jasmine", "Kai", "Lena", "Marco", "Nadia",
    "Oscar", "Priya", "Quentin", "Rosa", "Stefan", "Tatiana", "Umar", "Vera",
    "Wendy", "Xavier", "Yara", "Zahra", "Anton", "Bianca", "Cyrus", "Daniela",
    "Emil", "Freya", "Gustav", "Hana", "Isak", "Joana", "Kenji", "Lucia",
]

LAST_NAMES = [
    "Anderson", "Brown", "Clark", "Davis", "Evans", "Fisher", "Garcia", "Harris",
    "Johnson", "King", "Lee", "Miller", "Nelson", "O'Connor", "Parker", "Quinn",
    "Rodriguez", "Smith", "Taylor", "Underwood", "Valdez", "Wilson", "Xavier",
    "Young", "Zhang", "Adams", "Baker", "Cooper", "Duncan", "Ellis", "Foster",
    "Gonzalez", "Hughes", "Ivanov", "Jensen", "Khan", "Lopez", "Mitchell",
    "Nakamura", "Ortega", "Petrov", "Ramirez", "Sullivan", "Takahashi", "Ueda",
    "Vargas", "Weber", "Xu", "Yamamoto", "Zimmerman", "Andersen", "Berger",
    "Cheng", "Dubois", "Eriksson", "Fernandez", "Graf", "Hernandez", "Ibrahim",
]

ORGANIZATIONS = [
    "Digital Services Corp", "Green Energy Solutions", "Healthcare Partners",
    "Education Foundation", "Transport Authority", "Housing Development Co",
    "Financial Services Inc", "Technology Innovations", "Agricultural Cooperative",
    "Environmental Protection Agency", "Cultural Heritage Foundation",
    "Community Development Trust", "Infrastructure Management", "Social Services Org",
    "Maritime Trade Association", "Renewable Resources Ltd", "Urban Planning Bureau",
    "Cybersecurity Alliance", "Public Health Institute", "Arts Council",
]

CITY_COORDINATES = [
    {"name": "Paris", "lat": 48.8566, "lng": 2.3522},
    {"name": "New York", "lat": 40.7128, "lng": -74.0060},
    {"name": "Tokyo", "lat": 35.6762, "lng": 139.6503},
    {"name": "Sydney", "lat": -33.8688, "lng": 151.2093},
    {"name": "London", "lat": 51.5074, "lng": -0.1278},
    {"name": "Berlin", "lat": 52.5200, "lng": 13.4050},
    {"name": "Seoul", "lat": 37.5665, "lng": 126.9780},
    {"name": "Singapore", "lat": 1.3521, "lng": 103.8198},
    {"name": "Dubai", "lat": 25.2048, "lng": 55.2708},
    {"name": "Sao Paulo", "lat": -23.5505, "lng": -46.6333},
    {"name": "Mumbai", "lat": 19.0760, "lng": 72.8777},
    {"name": "Toronto", "lat": 43.6532, "lng": -79.3832},
    {"name": "Amsterdam", "lat": 52.3676, "lng": 4.9041},
    {"name": "Stockholm", "lat": 59.3293, "lng": 18.0686},
    {"name": "Cape Town", "lat": -33.9249, "lng": 18.4241},
    {"name": "Buenos Aires", "lat": -34.6037, "lng": -58.3816},
    {"name": "Bangkok", "lat": 13.7563, "lng": 100.5018},
    {"name": "Nairobi", "lat": -1.2921, "lng": 36.8219},
    {"name": "Mexico City", "lat": 19.4326, "lng": -99.1332},
    {"name": "Istanbul", "lat": 41.0082, "lng": 28.9784},
]

PROPOSAL_TITLES = [
    "Establish Public Transit System",
    "Create Community Garden Network",
    "Implement Digital Identity Standard",
    "Fund Renewable Energy Infrastructure",
    "Launch Literacy Education Program",
    "Build Affordable Housing Complex",
    "Modernize Water Treatment Plant",
    "Deploy Public WiFi Network",
    "Create Small Business Grant Fund",
    "Establish Youth Sports League",
    "Implement Waste Recycling Program",
    "Fund Healthcare Clinic Expansion",
    "Create Public Art Installation Fund",
    "Deploy Emergency Alert System",
    "Establish Community Mediation Center",
    "Fund Road Repair Initiative",
    "Create Elder Care Support Network",
    "Launch Environmental Monitoring System",
    "Establish Public Library Digital Wing",
    "Fund Cultural Festival Series",
]

PROPOSAL_DESCRIPTIONS = [
    "This proposal aims to improve community infrastructure and services.",
    "A comprehensive plan to enhance the quality of life for all members.",
    "An initiative to modernize systems and improve efficiency.",
    "A forward-looking investment in sustainable community development.",
    "This project will create lasting benefits for current and future generations.",
    "An evidence-based approach to solving long-standing community challenges.",
    "This initiative leverages modern technology for public benefit.",
    "A collaborative effort to strengthen community bonds and resources.",
]

NOTIFICATION_TOPICS = [
    "system", "governance", "finance", "community", "security",
    "maintenance", "update", "alert",
]

NOTIFICATION_TITLES = [
    "Welcome to the Realm",
    "New Proposal Submitted",
    "Your Vote Has Been Recorded",
    "Budget Report Available",
    "Membership Status Updated",
    "System Maintenance Scheduled",
    "New Member Registered",
    "Transfer Completed",
    "Fiscal Period Closing Soon",
    "Community Event Announcement",
    "Security Alert",
    "License Renewal Reminder",
    "Court Case Update",
    "Penalty Notice",
    "Organization Approved",
]

FUND_DEFINITIONS = [
    {"code": "GF001", "name": "General Fund", "fund_type": "general",
     "description": "Primary operating fund for general activities"},
    {"code": "SF001", "name": "Infrastructure Fund", "fund_type": "special_revenue",
     "description": "Dedicated fund for infrastructure projects"},
    {"code": "CF001", "name": "Capital Projects Fund", "fund_type": "capital_projects",
     "description": "Fund for major capital acquisitions and construction"},
    {"code": "DS001", "name": "Debt Service Fund", "fund_type": "debt_service",
     "description": "Fund for principal and interest payments"},
    {"code": "EF001", "name": "Enterprise Fund", "fund_type": "enterprise",
     "description": "Business-type activities fund"},
    {"code": "TF001", "name": "Trust Fund", "fund_type": "trust",
     "description": "Fiduciary resources held in trust"},
]

BUDGET_CATEGORIES_REVENUE = ["tax", "fee", "grant", "fine", "service", "investment_income"]
BUDGET_CATEGORIES_EXPENSE = ["personnel", "supplies", "services", "capital", "debt"]

TRANSFER_TAGS = [
    "operating", "capital", "investment", "payroll", "tax_payment",
    "grant_disbursement", "service_fee", "utility", "maintenance",
]

MANDATE_NAMES = [
    "Tax Collection", "Social Benefits Distribution", "License Management",
    "Land Registry Administration", "Voting System Operation",
    "Healthcare Services", "Education Funding", "Environmental Compliance",
]

RESIDENCE_PERMITS = ["valid", "expired", "pending"]
TAX_COMPLIANCE = ["compliant", "delinquent", "under_review"]
IDENTITY_VERIFICATION = ["verified", "pending", "rejected"]
VOTING_ELIGIBILITY = ["eligible", "ineligible", "suspended"]
BENEFITS_ELIGIBILITY = ["eligible", "ineligible", "conditional"]
CRIMINAL_RECORDS = ["clean", "minor_offenses", "major_offenses"]
