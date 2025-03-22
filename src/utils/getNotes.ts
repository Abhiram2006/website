import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Note {
  slug: string;
  title: string;
  tags: string[];
}

export function getAllNotes(): Note[] {
  const notesDir = path.join(process.cwd(), 'publicnotes');
  const files = fs.readdirSync(notesDir);

  return files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const filePath = path.join(notesDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(fileContent);

      return {
        slug: file.replace(/\.md$/, ''),
        title: data.title || file.replace(/\.md$/, ''),
        tags: data.tags || []
      };
    });
}

