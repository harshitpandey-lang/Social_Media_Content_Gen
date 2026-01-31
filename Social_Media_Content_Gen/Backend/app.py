from fastapi import FastAPI, HTTPException, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
from io import BytesIO
from ai import Orchestrator

api=FastAPI()

# Configure CORS
api.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@api.get('/')
def index():
    return {"message":"Hello FastApi"}

@api.post('/api/generate-caption/')
async def generate_caption(
    platform: str = Form(...),
    image: UploadFile = File(...)
):
    # Validate image
    allowed_types = ["image/jpeg", "image/png", "image/jpg"]
    if image.content_type not in allowed_types:
        raise HTTPException(status_code=400, detail="Only image file types allowed")
    
    # Convert to PIL Image
    img_bytes = await image.read()
    img = Image.open(BytesIO(img_bytes))
    
    # Generate caption
    caption = Orchestrator(img, platform)
    
    return {"caption": caption}


    
    

    