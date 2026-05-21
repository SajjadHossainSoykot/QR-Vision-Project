from pathlib import Path


def delete_file_safely(file_path: str):
    Path(file_path).unlink(missing_ok=True)