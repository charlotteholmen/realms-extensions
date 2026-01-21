# Justice Litigation

Comprehensive legal case management with courts, judges, verdicts, penalties, and appeals.

## Features
- **Justice Systems**: Public and private justice systems
- **Courts**: Multi-level court hierarchy (first instance, appellate, specialized)
- **Judges**: Judge management with specializations and conflict-of-interest checks
- **Cases**: Full case lifecycle from filing to resolution
- **Verdicts**: Formal verdict issuance with reasoning
- **Penalties**: Financial penalties (fines, restitution) with execution tracking
- **Appeals**: Appeals workflow with appellate court review

## API Entry Points

### New API (v0.2.0)
| Function | Description |
|----------|-------------|
| `get_justice_systems` | List justice systems |
| `get_courts` | List courts with filtering |
| `get_judges` | List judges with filtering |
| `get_cases` | List cases with filtering |
| `get_case` | Get single case with full details |
| `file_case` | File a new case |
| `assign_judge` | Assign judge to case |
| `get_verdicts` | List verdicts |
| `issue_verdict` | Issue verdict with penalties |
| `get_penalties` | List penalties |
| `execute_penalty` | Execute a penalty |
| `waive_penalty` | Waive a penalty |
| `get_appeals` | List appeals |
| `file_appeal` | File an appeal |
| `decide_appeal` | Decide an appeal |
| `get_statistics` | Get system statistics |

### Legacy API (deprecated)
- `get_litigations` → Use `get_cases`
- `create_litigation` → Use `file_case`
- `execute_verdict` → Use `issue_verdict`

## Data Model

Uses GGG Justice System entities:
- `JusticeSystem` - Public/private justice systems
- `Court` - Courts with jurisdiction and licensing
- `Judge` - Judges with appointments and specializations
- `Case` - Legal cases with parties and status
- `Verdict` - Court decisions with reasoning
- `Penalty` - Financial penalties
- `Appeal` - Appeals to higher courts
- `License` - Court operating licenses

**Category:** Public Services  
**Access:** Members and Admins  
**Version:** 0.2.0
