import { Injectable } from '@angular/core';
import { Article, ArticleCategory } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private articles: Article[] = [
    {
      slug: 'signs-of-dementia-senior-dogs',
      title: 'Signs of Dementia in Senior Dogs',
      description:
        'Learn the key signs of dementia in senior dogs, what causes canine cognitive dysfunction, and how to support your aging dog\'s brain health.',
      date: '2026-03-22',
      category: 'health',
      tags: ['dementia', 'cognitive', 'senior dog', 'brain health', 'CDS'],
      author: 'Editorial Team',
      heroImage: 'assets/images/senior-dog-dementia.jpg',
      heroImageAlt: 'Senior golden retriever resting peacefully indoors',
      tldr: 'Canine cognitive dysfunction (CDS) affects up to 68% of dogs aged 15–16. Key signs include disorientation, sleep changes, forgetting commands, and reduced interaction. It\'s manageable — early detection and vet-recommended supplements can slow progression.',
      wordCount: 1520,
      readingTime: 7,
      affiliateDisclosure: true,
      affiliateProducts: [
        {
          name: 'Purina Pro Plan Bright Mind',
          url: '#',
          program: 'amazon',
          reason:
            'Contains enhanced botanical oils shown to promote alertness and mental sharpness in dogs 7+.',
        },
      ],
      internalLinks: [
        {
          title: 'Fish Oil Dosage for Senior Dogs',
          slug: 'fish-oil-dosage-senior-dogs',
          category: 'supplements',
        },
      ],
      externalLinks: [
        {
          title: 'Canine Cognitive Dysfunction',
          url: 'https://www.petmd.com/dog/conditions/neurological/c_dg_cognitive_dysfunction_syndrome',
          source: 'PetMD',
        },
      ],
      faqs: [
        {
          question: 'What are the first signs of dementia in dogs?',
          answer:
            'The earliest signs of canine cognitive dysfunction include subtle changes such as staring blankly at walls, getting stuck in corners, briefly forgetting familiar routes around the house, and minor disruptions to their normal sleep routine. You may also notice them seeming "checked out" or less responsive to their name than usual.',
        },
        {
          question: 'Is there a cure for dog dementia?',
          answer:
            'There is currently no cure for canine cognitive dysfunction syndrome (CDS). However, the condition is manageable. Medications like selegiline (Anipryl) are FDA-approved to slow progression. Dietary changes, mental enrichment activities, and supplements containing antioxidants and omega-3 fatty acids can also help maintain cognitive function for longer.',
        },
        {
          question: 'Can you prevent dementia in senior dogs?',
          answer:
            'While you cannot guarantee prevention, you can significantly reduce the risk. Regular mental stimulation through puzzle feeders and training, daily low-impact exercise, a diet rich in antioxidants and omega-3s, and routine veterinary checkups starting at age 7 all contribute to better long-term brain health.',
        },
      ],
      content: `
<p>If your aging dog seems confused about where he is, struggles to find his food bowl, or wanders aimlessly at night, you may be witnessing the early signs of <strong>canine cognitive dysfunction syndrome (CDS)</strong> — the dog equivalent of Alzheimer's disease. Recognizing the signs of dementia in senior dogs early gives you the best chance of slowing the progression and keeping your companion comfortable.</p>

<h2>What Is Canine Cognitive Dysfunction?</h2>
<p>Canine cognitive dysfunction is a neurodegenerative disorder that affects older dogs, causing a decline in memory, learning, perception, and awareness. It is caused by physical changes in the brain — including the buildup of beta-amyloid plaques (the same protein associated with Alzheimer's in humans) — that impair normal neurological function.</p>
<p>CDS is far more common than many pet owners realize. Studies estimate that <strong>up to 28% of dogs aged 11–12 show some signs of CDS</strong>, and that number climbs to 68% in dogs aged 15–16. Because the symptoms often develop gradually and can be mistaken for "normal aging," many cases go undiagnosed.</p>

<h2>7 Signs of Dementia in Senior Dogs</h2>
<p>Veterinarians use the acronym <strong>DISHA</strong> to classify the core symptoms of CDS: Disorientation, Interaction changes, Sleep-wake cycle disruption, House soiling, and Activity changes. Here are seven signs to watch for:</p>
<ul>
  <li><strong>Disorientation and confusion:</strong> Getting lost in familiar places, staring into corners, or appearing startled by surroundings.</li>
  <li><strong>Changes in social interaction:</strong> Seeking less affection, appearing irritable, or failing to greet family members the way they used to.</li>
  <li><strong>Disrupted sleep patterns:</strong> Sleeping more during the day and restlessly pacing or vocalizing at night.</li>
  <li><strong>House soiling:</strong> Having accidents indoors despite being previously house-trained, often with no apparent physical cause.</li>
  <li><strong>Forgetting learned commands:</strong> Not responding to "sit," "stay," or their own name — even when their hearing is intact.</li>
  <li><strong>Repetitive behaviors:</strong> Pacing in circles, licking the same spot repeatedly, or fixating on objects.</li>
  <li><strong>Reduced activity and interest:</strong> Losing enthusiasm for walks, play, or activities they previously enjoyed.</li>
</ul>

<h2>What Causes CDS?</h2>
<p>The underlying cause of CDS is a combination of factors: the accumulation of amyloid plaques in the brain, oxidative stress from free radicals, and decreased blood flow to the brain. Inflammation may also play a role. Unlike an injury or infection, CDS is a progressive condition — meaning it typically worsens over time without intervention.</p>
<p>Genetics may influence susceptibility, and some breeds appear to be at higher risk, though CDS can affect any dog of any breed as they age.</p>

<h2>How Is CDS Diagnosed?</h2>
<p>There is no single definitive test for CDS. Diagnosis is made by ruling out other conditions that can cause similar symptoms — including hypothyroidism, brain tumors, vision/hearing loss, urinary tract infections, and arthritis-related pain. Your vet may recommend blood panels, urinalysis, and in some cases, MRI imaging to rule out structural brain changes.</p>
<p>If all other causes are excluded and your dog displays multiple DISHA symptoms, CDS is the most likely diagnosis.</p>

<h2>Treatment and Management Options</h2>
<p>While CDS cannot be reversed, several approaches can slow its progression and improve your dog's quality of life:</p>
<ul>
  <li><strong>Prescription medication:</strong> Selegiline (brand name Anipryl) is the only FDA-approved drug for canine cognitive dysfunction and works by increasing dopamine levels in the brain.</li>
  <li><strong>Dietary support:</strong> Foods enriched with antioxidants, vitamin E, vitamin C, selenium, and L-carnitine support mitochondrial function and reduce oxidative stress. Diets containing medium-chain triglycerides (MCTs) — such as <strong>Purina Pro Plan Bright Mind</strong> — have shown promising results in clinical studies.</li>
  <li><strong>Omega-3 fatty acids:</strong> Fish oil supplementation has evidence behind it for supporting brain health in dogs. See our guide to <a routerLink="/blog/supplements/fish-oil-dosage-senior-dogs">Fish Oil Dosage for Senior Dogs</a>.</li>
  <li><strong>Mental enrichment:</strong> Puzzle feeders, nose work activities, and short training sessions help keep aging brains active.</li>
  <li><strong>Consistent routine:</strong> Predictable schedules reduce anxiety and confusion for dogs with CDS.</li>
  <li><strong>Melatonin:</strong> May help normalize disrupted sleep-wake cycles — discuss appropriate dosing with your vet.</li>
</ul>

<h2>When to Call the Vet</h2>
<p>You should schedule a vet visit as soon as you notice two or more of the DISHA signs described above — especially if the symptoms appeared suddenly or are worsening quickly. Sudden onset can indicate a different condition (such as a brain lesion or vestibular disease) that requires urgent treatment. Your vet can help distinguish between CDS and other treatable causes.</p>
<p>Early diagnosis gives you more options and more time. If you're concerned about your senior dog's cognitive health, don't wait for symptoms to become severe before seeking guidance.</p>
`,
    },

    {
      slug: 'fish-oil-dosage-senior-dogs',
      title: 'Fish Oil Dosage for Senior Dogs: How Much Is Safe?',
      description:
        'Find the right fish oil dosage for your senior dog by weight. Learn the benefits, risks, and best fish oil supplements for aging dogs.',
      date: '2026-03-20',
      category: 'supplements',
      tags: ['fish oil', 'omega-3', 'supplements', 'joints', 'dosage'],
      author: 'Editorial Team',
      heroImage: 'assets/images/fish-oil-senior-dog.jpg',
      heroImageAlt: 'Senior dog sitting next to a bottle of fish oil supplement',
      tldr: 'Fish oil (omega-3) is one of the most evidence-backed supplements for senior dogs. Typical dose: 20–55 mg EPA+DHA per kg of body weight. Always choose fish oil — not flaxseed — and start slow to avoid digestive upset.',
      wordCount: 1480,
      readingTime: 6,
      affiliateDisclosure: true,
      affiliateProducts: [
        {
          name: 'Zesty Paws Pure Wild Alaskan Salmon Oil',
          url: '#',
          program: 'amazon',
          reason:
            'Third-party tested for heavy metals with clear EPA/DHA labeling per pump, making accurate dosing straightforward.',
        },
      ],
      internalLinks: [
        {
          title: 'Signs of Dementia in Senior Dogs',
          slug: 'signs-of-dementia-senior-dogs',
          category: 'health',
        },
      ],
      externalLinks: [
        {
          title: 'Omega-3 Fatty Acids in Dogs and Cats',
          url: 'https://vcahospitals.com/know-your-pet/fish-oil-supplementation',
          source: 'VCA Hospitals',
        },
      ],
      faqs: [
        {
          question: 'How much fish oil should I give my senior dog daily?',
          answer:
            'The most commonly cited guideline is 20–55 mg of combined EPA+DHA per kilogram of body weight per day. For a 10 kg (22 lb) dog, that is 200–550 mg of EPA+DHA. Always check the label for EPA+DHA content, not just total fish oil volume, as these are the active omega-3 compounds.',
        },
        {
          question: 'Can too much fish oil harm my dog?',
          answer:
            'Yes. Excessive fish oil can cause digestive issues (loose stools, diarrhea), reduce platelet function and impair clotting, contribute to vitamin E deficiency over time, and in large amounts may suppress immune function. Stick to the recommended dose range and consult your vet if your dog is on blood thinners or has a clotting disorder.',
        },
      ],
      content: `
<p>Fish oil is one of the most widely studied nutritional supplements for dogs — and for good reason. The omega-3 fatty acids EPA and DHA found in marine fish oil have documented benefits for joint health, skin and coat condition, heart function, and cognitive health in aging dogs. But getting the <strong>fish oil dosage for senior dogs</strong> right is critical: too little and you see no benefit; too much can cause problems.</p>

<h2>Why Senior Dogs Need Fish Oil</h2>
<p>As dogs age, inflammation becomes a central driver of many common conditions — arthritis, cognitive decline, heart disease, and kidney disease all have inflammatory components. EPA (eicosapentaenoic acid) and DHA (docosahexaenoic acid), the two primary omega-3 fatty acids in fish oil, work by reducing the production of inflammatory mediators in the body.</p>
<p>DHA in particular is critical for brain health. It is a major structural component of cell membranes in the brain, and declining DHA levels have been linked to cognitive dysfunction in aging dogs. Supplementing with fish oil may help slow cognitive decline — especially when started early.</p>

<h2>How Much Fish Oil for Senior Dogs?</h2>
<p>The most widely cited dosing guideline comes from the National Research Council and veterinary nutritionists: <strong>20–55 mg of combined EPA+DHA per kilogram of body weight per day</strong> for general health support. For therapeutic use (treating active inflammation or joint disease), some vets recommend up to 100 mg/kg under supervision.</p>

<table>
  <thead>
    <tr>
      <th>Dog Weight</th>
      <th>Daily EPA+DHA (low end)</th>
      <th>Daily EPA+DHA (high end)</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>5 kg (11 lbs)</td><td>100 mg</td><td>275 mg</td></tr>
    <tr><td>10 kg (22 lbs)</td><td>200 mg</td><td>550 mg</td></tr>
    <tr><td>20 kg (44 lbs)</td><td>400 mg</td><td>1,100 mg</td></tr>
    <tr><td>30 kg (66 lbs)</td><td>600 mg</td><td>1,650 mg</td></tr>
    <tr><td>40 kg (88 lbs)</td><td>800 mg</td><td>2,200 mg</td></tr>
  </tbody>
</table>

<p><em>Note: Always count EPA+DHA milligrams, not total fish oil. A 1,000 mg fish oil capsule may contain only 300 mg of EPA+DHA.</em></p>

<h2>Fish Oil vs. Flaxseed: Which Should You Use?</h2>
<p>Flaxseed oil contains ALA (alpha-linolenic acid), a plant-based omega-3. Many pet owners reach for flaxseed as a plant-based alternative, but it is <strong>not an effective substitute for fish oil in dogs</strong>. Dogs have a very limited ability to convert ALA into EPA and DHA — the conversion rate is estimated to be under 10%. For senior dogs who need the direct anti-inflammatory and neuroprotective effects of EPA and DHA, fish oil (or algae oil for a marine-based vegan option) is the right choice.</p>

<h2>Best Fish Oil Supplements for Senior Dogs</h2>
<p>When selecting a fish oil product, look for these qualities:</p>
<ul>
  <li><strong>Third-party tested:</strong> Look for products verified by NSF, USP, or IFOS for heavy metal contamination (mercury, PCBs).</li>
  <li><strong>Clear EPA/DHA labeling:</strong> The label should state exact milligrams of EPA and DHA per serving — not just "omega-3s."</li>
  <li><strong>Liquid or soft capsule form:</strong> Easier to dose accurately and typically fresher than pills.</li>
  <li><strong>Wild-caught sourcing:</strong> Generally lower in contaminants than farmed fish sources.</li>
  <li><strong>No added flavors or fillers:</strong> Especially important if your dog has a sensitive stomach.</li>
</ul>
<p><strong>Zesty Paws Pure Wild Alaskan Salmon Oil</strong> meets all of these criteria — it's third-party tested for heavy metals, provides a clear pump with measured EPA+DHA per dose, and is sourced from wild Alaskan salmon.</p>

<h2>Possible Side Effects</h2>
<p>Fish oil is generally safe when dosed appropriately, but watch for these side effects — especially when starting supplementation:</p>
<ul>
  <li><strong>Digestive upset:</strong> Loose stools or diarrhea are the most common side effects, especially if introduced too quickly. Start with half the target dose for the first two weeks.</li>
  <li><strong>Fishy breath or body odor:</strong> Harmless but common.</li>
  <li><strong>Impaired wound healing:</strong> At very high doses, fish oil can affect platelet aggregation. Discuss with your vet before surgery.</li>
  <li><strong>Vitamin E depletion:</strong> Long-term high-dose fish oil use can deplete vitamin E. Some vets recommend supplementing vitamin E alongside fish oil.</li>
</ul>

<p>Always introduce fish oil gradually, and consult your veterinarian before adding any supplement — especially if your dog has existing health conditions or takes medications.</p>
`,
    },

    {
      slug: 'how-to-help-old-dog-stiff-legs',
      title: 'How to Help an Old Dog With Stiff Legs',
      description:
        'Practical tips to ease stiff legs in senior dogs — from joint supplements and gentle exercise to home modifications and vet treatments.',
      date: '2026-03-18',
      category: 'health',
      tags: ['stiff legs', 'arthritis', 'mobility', 'joints', 'exercise', 'senior dog'],
      author: 'Editorial Team',
      heroImage: 'assets/images/old-dog-stiff-legs.jpg',
      heroImageAlt: 'Older Labrador retriever getting up slowly from a dog bed',
      tldr: 'Stiff legs in older dogs are most commonly caused by arthritis or hip dysplasia. You can help by using joint supplements (glucosamine + fish oil), orthopedic bedding, gentle daily walks, ramps instead of stairs, and anti-slip flooring.',
      wordCount: 1560,
      readingTime: 7,
      affiliateDisclosure: true,
      affiliateProducts: [
        {
          name: 'Doggie Dailies Glucosamine for Dogs',
          url: '#',
          program: 'amazon',
          reason:
            'Includes glucosamine, chondroitin, MSM, and turmeric in one chew — the four most researched joint support ingredients.',
        },
        {
          name: 'PetFusion Ultimate Dog Bed',
          url: '#',
          program: 'amazon',
          reason:
            '4-inch solid memory foam relieves pressure on arthritic joints, with a waterproof liner for easy cleaning.',
        },
      ],
      internalLinks: [
        {
          title: 'Fish Oil Dosage for Senior Dogs',
          slug: 'fish-oil-dosage-senior-dogs',
          category: 'supplements',
        },
      ],
      externalLinks: [
        {
          title: 'Arthritis in Dogs',
          url: 'https://www.akc.org/expert-advice/health/arthritis-in-dogs/',
          source: 'American Kennel Club',
        },
      ],
      faqs: [
        {
          question: 'Why does my old dog have stiff legs in the morning?',
          answer:
            'Morning stiffness is one of the hallmark signs of osteoarthritis in dogs. During rest, synovial fluid in the joints becomes less distributed, and inflamed tissues stiffen. After a few minutes of movement, circulation improves and stiffness eases. If your dog is stiff for more than 10–15 minutes after getting up, it is worth discussing with your vet.',
        },
        {
          question: 'What supplements help dogs with stiff joints?',
          answer:
            'The most evidence-supported supplements for canine joint health include glucosamine HCl and chondroitin sulfate (which support cartilage structure), omega-3 fatty acids from fish oil (which reduce inflammation), and MSM (methylsulfonylmethane, which may reduce pain). Turmeric (curcumin) shows promise in reducing inflammatory markers. Always look for products formulated specifically for dogs.',
        },
        {
          question: 'Should I walk my dog if he has stiff legs?',
          answer:
            'Yes — gentle, consistent exercise is one of the best things you can do for a dog with arthritic stiffness. Short, low-impact walks help maintain muscle mass (which supports joints), keep synovial fluid circulating, and prevent weight gain that would add further stress to joints. Avoid high-impact activities like jumping, rough play, or running on hard surfaces.',
        },
      ],
      content: `
<p>Watching your dog struggle to get up from their bed, hesitate at the bottom of the stairs, or walk with a stiff, stilted gait is one of the more heartbreaking parts of caring for an aging dog. The good news is that <strong>stiff legs in senior dogs are almost always manageable</strong>. Whether the cause is osteoarthritis, hip dysplasia, or muscle loss, there are proven strategies to help your dog move more comfortably and maintain a good quality of life.</p>

<h2>Why Old Dogs Get Stiff Legs</h2>
<p>The most common culprit is <strong>osteoarthritis (OA)</strong> — the progressive breakdown of cartilage in the joints. Without the cushioning of healthy cartilage, bone rubs against bone, causing inflammation, pain, and stiffness. Osteoarthritis is estimated to affect 20% of dogs over one year of age and up to 80% of dogs over 8 years of age.</p>
<p>Other common causes include:</p>
<ul>
  <li><strong>Hip dysplasia:</strong> A genetic malformation of the hip socket, common in larger breeds like German Shepherds, Labradors, and Golden Retrievers.</li>
  <li><strong>Elbow dysplasia:</strong> Similar malformation in the elbow joint.</li>
  <li><strong>Muscle atrophy:</strong> As dogs age and become less active, they lose muscle mass, leaving joints less supported and movement more effortful.</li>
  <li><strong>Intervertebral disc disease (IVDD):</strong> Disc problems in the spine can cause stiffness and weakness, particularly in the hind legs.</li>
  <li><strong>Lyme disease:</strong> In tick-prevalent areas, Lyme arthritis can cause sudden-onset joint stiffness and should always be ruled out.</li>
</ul>

<h2>5 Signs It's More Than Normal Aging</h2>
<p>Some slowdown is expected in older dogs, but these signs suggest your dog needs veterinary attention sooner rather than later:</p>
<ol>
  <li>Stiffness that lasts more than 15 minutes after getting up</li>
  <li>Crying, whimpering, or showing other signs of pain during movement</li>
  <li>Reluctance to bear weight on one leg (lameness)</li>
  <li>Visible swelling around a joint</li>
  <li>Sudden worsening of stiffness that was previously stable</li>
</ol>

<h2>8 Ways to Help Your Dog Move More Comfortably</h2>

<h3>1. Joint Supplements</h3>
<p>Glucosamine and chondroitin are the two most researched ingredients for joint support in dogs. Glucosamine supports cartilage production; chondroitin inhibits enzymes that break cartilage down. Combined products that also include MSM and turmeric (curcumin) offer additional anti-inflammatory benefit. <strong>Doggie Dailies Glucosamine for Dogs</strong> combines all four of these ingredients in a palatable chew.</p>

<h3>2. Fish Oil Supplementation</h3>
<p>Omega-3 fatty acids (EPA and DHA from fish oil) have strong evidence for reducing joint inflammation. Studies in dogs with OA have shown measurable improvements in ground force reaction — a measure of how much weight a dog will comfortably put on a leg — after 3–4 months of consistent fish oil supplementation. See our full guide on <a routerLink="/blog/supplements/fish-oil-dosage-senior-dogs">Fish Oil Dosage for Senior Dogs</a>.</p>

<h3>3. Orthopedic Bedding</h3>
<p>Hard floors force arthritic dogs to redistribute weight away from painful joints, causing muscle fatigue and worsening stiffness. A quality orthopedic bed with solid memory foam — not just shredded foam, which loses support — allows joints to decompress during rest. The <strong>PetFusion Ultimate Dog Bed</strong> uses 4-inch solid memory foam and has a waterproof liner that makes cleaning easy.</p>

<h3>4. Gentle Daily Exercise</h3>
<p>Counterintuitively, rest makes arthritis worse over time. Regular low-impact movement keeps synovial fluid circulating, maintains the muscle mass that stabilizes joints, and prevents the weight gain that increases joint load. Aim for two 10–20 minute walks per day on soft surfaces (grass, dirt paths) rather than pavement when possible. Hydrotherapy and swimming are excellent low-impact options for dogs with significant mobility issues.</p>

<h3>5. Ramps and Steps</h3>
<p>Jumping on and off furniture or into cars creates significant impact on arthritic joints. Ramps or pet stairs allow your dog to access their favorite spots without the impact. Place ramps at the car, the sofa, and anywhere else they regularly need to climb.</p>

<h3>6. Anti-Slip Flooring</h3>
<p>Hardwood and tile floors are hazardous for dogs with mobility issues — the effort of staying balanced on slippery surfaces creates muscle tension and can cause falls. Add yoga mats, rubber-backed rugs, or carpet runners along your dog's usual routes. Toe-grip socks or nail-applied grips (like Dr. Buzby's ToeGrips) can also help.</p>

<h3>7. Weight Management</h3>
<p>Every pound of excess body weight puts approximately 4–5 pounds of additional pressure on the hips and knees. If your senior dog is overweight, even modest weight loss can produce significant improvement in mobility. Ask your vet about a senior weight management diet.</p>

<h3>8. Veterinary Pain Management</h3>
<p>For moderate to severe arthritis, lifestyle modifications and supplements may not be sufficient alone. Veterinary options include NSAIDs (non-steroidal anti-inflammatory drugs) prescribed and monitored by your vet, gabapentin for neuropathic pain, and newer treatments such as monoclonal antibody therapy (Librela/bedinvetmab) that targets nerve growth factor — one of the primary pain signaling molecules in OA.</p>

<h2>When to See the Vet</h2>
<p>If you haven't already had your senior dog evaluated for joint disease, book an appointment. Your vet can assess the degree of mobility limitation, take X-rays to confirm arthritis and its severity, rule out other causes, and create a management plan appropriate for your dog's specific condition. Earlier intervention means more options and better outcomes.</p>
`,
    },
  ];

  getAll(): Article[] {
    return this.articles;
  }

  getBySlug(slug: string): Article | undefined {
    return this.articles.find((a) => a.slug === slug);
  }

  getByCategory(category: ArticleCategory): Article[] {
    return this.articles.filter((a) => a.category === category);
  }

  getFeatured(count: number): Article[] {
    return this.articles.slice(0, count);
  }

  getRelated(article: Article, count: number): Article[] {
    return this.articles
      .filter((a) => a.category === article.category && a.slug !== article.slug)
      .slice(0, count);
  }
}
