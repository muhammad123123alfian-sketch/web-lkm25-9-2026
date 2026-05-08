import { supabase } from "@/lib/supabase";

export interface Member {
  id: string;
  name: string;
  role: string;
  info: string;
  github_url?: string;
  instagram_url?: string;
  linkedin_url?: string;
  image_url?: string;
}

export const memberService = {
  async getAllMembers() {
    if (!supabase) return [];
    
    const { data, error } = await supabase
      .from("members")
      .select("*")
      .order("name", { ascending: true });

    if (error) {
      console.error("Error fetching members:", error);
      return [];
    }

    return data as Member[];
  },

  async getMemberById(id: string) {
    if (!supabase) return null;

    const { data, error } = await supabase
      .from("members")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error(`Error fetching member ${id}:`, error);
      return null;
    }

    return data as Member;
  }
};
